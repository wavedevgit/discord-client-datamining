package bn;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.ViewGroup;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class l {
    public static final LayoutInflater a(Context context, ViewGroup viewGroup) {
        Context context2;
        Intrinsics.checkNotNullParameter(context, "<this>");
        if (viewGroup == null || (context2 = viewGroup.getContext()) == null) {
            context2 = context;
        }
        return LayoutInflater.from(context2).cloneInContext(context);
    }
}
