![img](https://raw.githubusercontent.com/leonardiwagner/hideboy/master/public/img/logo.png) ![img](https://travis-ci.org/leonardiwagner/hideboy.svg?branch=master)
=====
HideBoy is a lightweight public-key cryptography system. The cryptography algoritm is made at encryption time with the used public-key, this make the encryption algorith unique for each public-key, and even with this source code you can't decrypt without the correct public-key. This software doesn't save sensitive data such as IP, text or key, we only save text-length and used public-key length for metric purposes.


# API endpoints

- Encryption: http://hideboy.herokuapp.com/encrypt
- Decryption: http://hideboy.herokuapp.com/decrypt

Both APIs expect a JSON POST with this schema: {text: "some text", key:"some key"}

# How does it work?

Basically each letter of a text has a code. What this cryptography system does is matching the original text letters code with public-key letters code. Each key code sum with original text code, that results in the encrypted text.

|Text| a  | b  | c  | d | e  | f | g  |
|----|----|----|----|---|----|---|----|
|Text Values| 1  | 2  | 3  | 4 | 5  | 6 | 7  |
|**Key**|**s** | **o**  | **m**  | **e** | **k**  | **e** | **y**  |
|Key Values| 27 | 20 | 17 | 5 | 14 | 5 | 35 |
|**Key Values Sum**|**4** | **1**  | **2**  | **-1** | **4**  | **-1** | **6**  |
|Key Values Sum with Text| 5 | 3 | 5 | 3 | 8 | 4 | 13 |
|**Result Text**| **e** | **c** | **e** | **c** | **h** | **d** | **m** |

# How can it decrypt later?

With given encrypted text and the public-key used in encryption, the system will make the inverse sum, this will result in the original text again.

# How safe this cryptography system is?

The encryption text is done by the given public-key at encryption time. This garantee that your encrypt algorith will be unique and no one without correct key can decrypt the text, even with the encryption source code.


