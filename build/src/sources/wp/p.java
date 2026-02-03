package wp;

import android.text.StaticLayout;
import android.widget.TextView;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class p {
    public static final int a(TextView textView) {
        int width;
        Intrinsics.checkNotNullParameter(textView, "<this>");
        CharSequence text = textView.getText();
        if (text == null || (width = textView.getWidth()) == 0 || StringsKt.k0(text)) {
            return 0;
        }
        StaticLayout build = StaticLayout.Builder.obtain(text, 0, text.length(), textView.getPaint(), width).build();
        Intrinsics.checkNotNullExpressionValue(build, "build(...)");
        return build.getLineCount();
    }
}
