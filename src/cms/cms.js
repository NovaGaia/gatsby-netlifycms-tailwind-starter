import CMS from 'netlify-cms-app'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import ProjectsPagePreview from './preview-templates/ProjectsPagePreview'
import ProjectPagePreview from './preview-templates/ProjectPagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'
import ConfigurationPreview from './preview-templates/ConfigurationPreview'
import NavigationPreview from './preview-templates/NavigationPreview'

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('projects-index', ProjectsPagePreview)
CMS.registerPreviewTemplate('projects', ProjectPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
CMS.registerPreviewTemplate('configuration', ConfigurationPreview)
CMS.registerPreviewTemplate('navigations', NavigationPreview)
