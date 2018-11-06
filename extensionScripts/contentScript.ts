import preDefinedRules from './preDefinedRules/index';

/**
 * Returns rules for particular host
 * @param host Host of the current page
 */
function getRulesFor(host: string) {
  return preDefinedRules[host];
}

/**
 * Removes some shit from your shitty live
 */
function removeShit() {
  // ? Looks like a thing to improve with some sort of cache
  const rules = getRulesFor(window.location.host);
  // ? //

  if (!rules) {
    return;
  }

  rules.remove.forEach((rule) => {
    const elements = document.querySelectorAll(rule.selector);

    if (rule.processItems) {
      rule.processItems(elements);
    } else {
      elements.forEach((element) => {
        element.remove();
      });
    }
  });

  window.requestAnimationFrame(removeShit);
}

// ? Yeah, without window.onload
removeShit();
