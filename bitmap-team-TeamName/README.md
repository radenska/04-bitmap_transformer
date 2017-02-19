## Bitmap Transformer

The Bitmap Transformer allows you to change any shape and size 8-bit palette bitmap file (extension .bmp) using your terminal command line and node.js.

***
## How to Use

* Install node.js if you do not have it (if you are not sure how, here is a [tutorial](https://docs.npmjs.com/getting-started/installing-node)).
* Clone the Bitmap Transformer.

    ```
    $ git clone https://github.com/radenska/04-bitmap_transformer.git
    ```
* Navigate to the bitmap-team-TeamName directory and run the transformer.

    ```
    $ node index <filename> <transformation>
    ```
* You can view available files in the img directory, which is also where the new transformed files will appear (old filename + 'new').

    ```
    $ ls img
    ```

* The following transformations are available: red, green, blue, yellow, purple, invert, grayscale
* Examples
    ```
    $ node index butterfly.bmp invert
    ```
    #### Original
    ![N|Solid](https://raw.githubusercontent.com/radenska/04-bitmap_transformer/master/bitmap-team-TeamName/img/butterfly.bmp)
    #### Inverted
    ![N|Solid](https://raw.githubusercontent.com/radenska/04-bitmap_transformer/master/img/butterfly-inverted.bmp)


***
***

#### *Created by*

|Darcy McCabe|Nikko Pisciotti|Yana Radenska
|:---:|:---:|:---:|
[GitHub Repos](https://github.com/darms) |[GitHub Repos](https://github.com/npisciotti1)| [GitHub Repos](https://github.com/radenska)|
