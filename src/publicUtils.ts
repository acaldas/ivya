import {
  kAriaCheckedRoles,
  kAriaExpandedRoles,
  kAriaLevelRoles,
  kAriaPressedRoles,
  kAriaSelectedRoles,
} from './roleUtils'

export function getAriaCheckedRoles() {
  return [...kAriaCheckedRoles]
}

export function getAriaExpandedRoles() {
  return [...kAriaExpandedRoles]
}

export function getAriaLevelRoles() {
  return [...kAriaLevelRoles]
}

export function getAriaPressedRoles() {
  return [...kAriaPressedRoles]
}

export function getAriaSelectedRoles() {
  return [...kAriaSelectedRoles]
}

export {
  getAriaRole,
  getAriaChecked,
  getAriaDisabled,
  getAriaExpanded,
  getAriaLabelledByElements,
  getAriaLevel,
  getAriaPressed,
  getAriaSelected,
  getElementAccessibleName,
} from './roleUtils'
export { isElementVisible } from './domUtils'

export { cssEscape } from './stringUtils'
