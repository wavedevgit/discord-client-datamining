package eq;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.GradientDrawable;
import android.graphics.drawable.InsetDrawable;
import android.text.Spanned;
import android.text.style.URLSpan;
import android.util.Base64;
import android.widget.TextView;
import dq.k5;
import dq.l5;
import java.io.ByteArrayOutputStream;
import java.util.Iterator;
import java.util.List;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.KClass;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class f {

    /* renamed from: a  reason: collision with root package name */
    private static gr.e f21770a;

    public static final k5 a(List list, KClass type, Function1 predicate) {
        k5 a10;
        Intrinsics.checkNotNullParameter(list, "<this>");
        Intrinsics.checkNotNullParameter(type, "type");
        Intrinsics.checkNotNullParameter(predicate, "predicate");
        Iterator it = list.iterator();
        while (it.hasNext()) {
            k5 k5Var = (k5) it.next();
            if (type.isInstance(k5Var)) {
                Intrinsics.checkNotNull(k5Var, "null cannot be cast to non-null type T of com.withpersona.sdk2.inquiry.steps.ui.components.utils.ExtensionsKt.findFirst");
                if (((Boolean) predicate.invoke(k5Var)).booleanValue()) {
                    return k5Var;
                }
            } else if ((k5Var instanceof l5) && (a10 = a(((l5) k5Var).getChildren(), type, predicate)) != null) {
                return a10;
            }
        }
        return null;
    }

    public static final Drawable b(Context context, int i10, int i11) {
        Intrinsics.checkNotNullParameter(context, "context");
        int c10 = androidx.core.content.a.c(context, hp.b.f26785a);
        int c11 = androidx.core.content.a.c(context, hp.b.f26786b);
        double d10 = r1.c.d(i10, c10);
        double d11 = r1.c.d(i10, c11);
        float a10 = (float) pp.h.a(8.0d);
        GradientDrawable gradientDrawable = new GradientDrawable();
        if (d10 < d11) {
            c10 = c11;
        }
        gradientDrawable.setColor(c10);
        gradientDrawable.setCornerRadii(new float[]{a10, a10, a10, a10, a10, a10, a10, a10});
        gradientDrawable.setSize(i11 + ((int) pp.h.a(24.0d)), gradientDrawable.getMinimumHeight());
        return new InsetDrawable((Drawable) gradientDrawable, (int) pp.h.a(4.0d));
    }

    private static final gr.e c(Context context) {
        gr.e eVar = f21770a;
        if (eVar == null) {
            gr.e b10 = gr.e.b(context);
            f21770a = b10;
            Intrinsics.checkNotNullExpressionValue(b10, "also(...)");
            return b10;
        }
        return eVar;
    }

    public static final void d(TextView textView, String text) {
        Intrinsics.checkNotNullParameter(textView, "<this>");
        Intrinsics.checkNotNullParameter(text, "text");
        Context context = textView.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        gr.e c10 = c(context);
        Spanned e10 = c10.e(text);
        Intrinsics.checkNotNullExpressionValue(e10, "toMarkdown(...)");
        c10.d(textView, e10);
        if (e10.getSpans(0, e10.length(), jr.g.class).length == 0 && e10.getSpans(0, e10.length(), URLSpan.class).length == 0) {
            textView.setMovementMethod(null);
        }
    }

    public static final String e(Bitmap bitmap) {
        Intrinsics.checkNotNullParameter(bitmap, "<this>");
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        bitmap.compress(Bitmap.CompressFormat.PNG, 100, byteArrayOutputStream);
        String encodeToString = Base64.encodeToString(byteArrayOutputStream.toByteArray(), 3);
        Intrinsics.checkNotNull(encodeToString);
        return encodeToString;
    }
}
