package dr;

import android.content.Context;
import android.text.Spanned;
import android.widget.TextView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class e {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        a a(i iVar);

        e build();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface b {
    }

    public static a a(Context context) {
        return new f(context).a(er.a.r());
    }

    public static e b(Context context) {
        return a(context).a(er.a.r()).build();
    }

    public abstract void c(TextView textView, String str);

    public abstract void d(TextView textView, Spanned spanned);

    public abstract Spanned e(String str);
}
