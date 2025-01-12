# Panduan CSS Selectors dan Combinators

CSS menyediakan berbagai **selectors** dan **combinators** yang memungkinkan kita untuk menargetkan elemen tertentu di dalam dokumen HTML berdasarkan hubungan atau karakteristiknya. Berikut adalah penjelasan dan contoh penggunaan dari masing-masing selector dan combinator.

---

## **1. Descendant Selector (` `)**
Menargetkan elemen **keturunan (descendant)** dari elemen parent, tanpa memandang tingkat kedalaman.

### **Contoh:**
```css
.container p {
  color: blue;
}
```
- **Penjelasan:** Semua elemen `<p>` yang **berada di dalam** elemen dengan class `.container` akan memiliki teks berwarna biru, baik langsung maupun dalam nested tag.

### **HTML:**
```html
<div class="container">
  <p>Ini biru</p>
  <div>
    <p>Ini juga biru</p>
  </div>
</div>
```

---

## **2. Child Selector (`>`)**
Menargetkan elemen **anak langsung (direct child)** dari elemen parent.

### **Contoh:**
```css
.container > p {
  color: red;
}
```
- **Penjelasan:** Hanya elemen `<p>` yang merupakan **anak langsung** dari `.container` yang akan memiliki teks merah.

### **HTML:**
```html
<div class="container">
  <p>Ini merah</p>
  <div>
    <p>Ini tidak merah</p>
  </div>
</div>
```

---

## **3. Adjacent Sibling Selector (`+`)**
Menargetkan elemen **bersaudara langsung (adjacent sibling)** yang muncul setelah elemen tertentu.

### **Contoh:**
```css
h1 + p {
  color: green;
}
```
- **Penjelasan:** Elemen `<p>` yang **langsung mengikuti** elemen `<h1>` akan memiliki teks hijau.

### **HTML:**
```html
<h1>Judul</h1>
<p>Ini hijau</p>
<p>Ini tidak hijau</p>
```

---

## **4. General Sibling Selector (`~`)**
Menargetkan semua elemen **bersaudara (sibling)** yang muncul setelah elemen tertentu.

### **Contoh:**
```css
h1 ~ p {
  color: purple;
}
```
- **Penjelasan:** Semua elemen `<p>` yang merupakan **saudara (sibling)** dari `<h1>` akan memiliki teks ungu, selama mereka muncul **setelah** `<h1>`.

### **HTML:**
```html
<h1>Judul</h1>
<p>Ini ungu</p>
<p>Ini juga ungu</p>
```

---

## **5. Grouping Selector (`,`)**
Menargetkan beberapa elemen sekaligus.

### **Contoh:**
```css
h1, p {
  color: orange;
}
```
- **Penjelasan:** Elemen `<h1>` dan `<p>` akan memiliki teks berwarna oranye.

### **HTML:**
```html
<h1>Ini oranye</h1>
<p>Ini juga oranye</p>
<div>Ini tidak oranye</div>
```

---

## **6. Universal Selector (`*`)**
Menargetkan **semua elemen** dalam konteks tertentu.

### **Contoh:**
```css
.container * {
  margin: 0;
  padding: 0;
}
```
- **Penjelasan:** Semua elemen di dalam `.container` akan memiliki margin dan padding nol.

### **HTML:**
```html
<div class="container">
  <h1>Judul</h1>
  <p>Paragraf</p>
</div>
```

---

## **7. Attribute Selector**
Menargetkan elemen berdasarkan atribut tertentu.

### **Jenis Attribute Selector:**
1. **Menargetkan elemen dengan atribut tertentu:**
   ```css
   [type="text"] {
     border: 1px solid black;
   }
   ```
   - Menargetkan semua elemen dengan atribut `type="text"`.

2. **Menargetkan elemen yang memiliki atribut tertentu:**
   ```css
   [required] {
     border: 2px solid red;
   }
   ```
   - Menargetkan semua elemen yang memiliki atribut `required`.

3. **Menargetkan elemen dengan sebagian teks dalam atribut:**
   ```css
   [href*="google"] {
     color: blue;
   }
   ```
   - Menargetkan semua elemen dengan atribut `href` yang mengandung kata "google".

---

## **8. Pseudo-Class**
Menargetkan elemen berdasarkan **status** atau **keadaan** tertentu.

### **Contoh:**
1. **Menargetkan elemen pertama anak:**
   ```css
   div:first-child {
     color: red;
   }
   ```

2. **Menargetkan elemen terakhir anak:**
   ```css
   div:last-child {
     color: blue;
   }
   ```

3. **Menargetkan elemen ganjil/genap:**
   ```css
   tr:nth-child(odd) {
     background: #f0f0f0;
   }
   ```

---

## **9. Pseudo-Element**
Menargetkan bagian tertentu dari elemen.

### **Contoh:**
1. **Menargetkan teks pertama:**
   ```css
   p::first-letter {
     font-size: 2em;
   }
   ```

2. **Menargetkan baris pertama:**
   ```css
   p::first-line {
     font-weight: bold;
   }
   ```

---

### **Ringkasan**
| **Selector**      | **Deskripsi**                                                  | **Contoh**                  |
|--------------------|---------------------------------------------------------------|-----------------------------|
| Descendant (` `)   | Menargetkan elemen keturunan                                  | `.container p`             |
| Child (`>`)        | Menargetkan anak langsung                                     | `.container > p`           |
| Adjacent (`+`)     | Menargetkan saudara langsung                                  | `h1 + p`                   |
| General (`~`)      | Menargetkan semua saudara                                     | `h1 ~ p`                   |
| Grouping (`,`)     | Menargetkan beberapa elemen                                   | `h1, p`                    |
| Universal (`*`)    | Menargetkan semua elemen                                      | `*`                        |
| Attribute          | Menargetkan elemen berdasarkan atribut                       | `[type="text"]`            |
| Pseudo-Class       | Menargetkan elemen berdasarkan status                        | `:hover`, `:nth-child(odd)`|
| Pseudo-Element     | Menargetkan bagian tertentu dari elemen                      | `::first-line`             |

---

Jika ada pertanyaan lebih lanjut, jangan ragu untuk bertanya! 😊

