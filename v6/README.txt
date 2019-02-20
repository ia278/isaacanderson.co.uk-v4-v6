The below are general notes and guidelines used for www.isaacanderson.co.uk.

----------------------------------------
PAGES & MODULES
----------------------------------------

Eight page templates have been created (available at www.ia278.github.io/v6);

Archive     (used for general archives)
Article     (used for articles)
Error       (used for 404)
Index       (used for home)
Landing     (used for work, thoughts, testing)
List        (used for search results)
Posts       (used for section archives)
Single      (used for about)


Each of these page templates is made up of several replaceable modules. These are;


Error       (code for error hero)
Footer      (code for footer)
Head        (code for head)
Header      (code for header)
Hero        (code for hompeage hero)


Two modules act as placeholders for CMS generated content. These are;

Article     (placeholder for article content)
Single      (placeholder for single page content)


Article cards can be displayed in four different ways. The modules for these are;

Archive     (text only)
Featured    (large tiles, no description)
List        (full width horizontal tiles)
Posts       (grid view)


These should be used in different situations, with different design patterns.

Archive   - general archive pages, pagination
List      - search results & section archives, pagination 
Posts     - Index and post pages, 'see more' button


----------------------------------------
IMAGES
----------------------------------------

The maximum width of images are;
  - HERO: 1920 x 1080
  - CONTENT: 1080 x 608
  - THUMBNAILS: 200 x 113

Furthermore;

* HERO images;
  - must have an aspect ratio of 16:9.

* CONTENT images;
  - can be any size, but ideally 16:9,
  - must have the same aspect ratio if more than one is used.

* THUMBNAIL images;
  - must have an aspect ratio of 16:9.


----------------------------------------
LOGOS
----------------------------------------

The default height of the logo is 40px.

Changing this requires the variable in variables.scss to be changed as well, as this will update margins and headers.