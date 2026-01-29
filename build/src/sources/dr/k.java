package dr;

import android.text.Spannable;
import android.widget.TextView;
import java.lang.ref.WeakReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class k {

    /* renamed from: a  reason: collision with root package name */
    private final WeakReference f22344a;

    public k(TextView textView) {
        this.f22344a = new WeakReference(textView);
    }

    public static void a(Spannable spannable, TextView textView) {
        k[] kVarArr = (k[]) spannable.getSpans(0, spannable.length(), k.class);
        if (kVarArr != null) {
            for (k kVar : kVarArr) {
                spannable.removeSpan(kVar);
            }
        }
        spannable.setSpan(new k(textView), 0, spannable.length(), 18);
    }
}
