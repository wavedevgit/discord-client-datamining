package kotlin.text;

import java.util.Iterator;
import java.util.regex.Matcher;
import kotlin.ranges.IntRange;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class l {
    public static final /* synthetic */ MatchResult a(Matcher matcher, int i10, CharSequence charSequence) {
        return f(matcher, i10, charSequence);
    }

    public static final /* synthetic */ MatchResult b(Matcher matcher, CharSequence charSequence) {
        return g(matcher, charSequence);
    }

    public static final /* synthetic */ int e(Iterable iterable) {
        return j(iterable);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final MatchResult f(Matcher matcher, int i10, CharSequence charSequence) {
        if (!matcher.find(i10)) {
            return null;
        }
        return new i(matcher, charSequence);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final MatchResult g(Matcher matcher, CharSequence charSequence) {
        if (!matcher.matches()) {
            return null;
        }
        return new i(matcher, charSequence);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final IntRange h(java.util.regex.MatchResult matchResult) {
        return kotlin.ranges.d.u(matchResult.start(), matchResult.end());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final IntRange i(java.util.regex.MatchResult matchResult, int i10) {
        return kotlin.ranges.d.u(matchResult.start(i10), matchResult.end(i10));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int j(Iterable iterable) {
        Iterator it = iterable.iterator();
        int i10 = 0;
        while (it.hasNext()) {
            i10 |= ((c) it.next()).getValue();
        }
        return i10;
    }
}
