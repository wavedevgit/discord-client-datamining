package rp;

import android.content.Context;
import android.content.res.Resources;
import android.util.TypedValue;
import java.util.Locale;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class s {
    public static final boolean a(Context context, int i10, TypedValue typedValue, boolean z10, boolean z11) {
        Intrinsics.checkNotNullParameter(context, "<this>");
        Intrinsics.checkNotNullParameter(typedValue, "typedValue");
        if (!context.getTheme().resolveAttribute(i10, typedValue, z10) || typedValue.type != 18) {
            return z11;
        }
        if (typedValue.data != 0) {
            return true;
        }
        return false;
    }

    public static /* synthetic */ boolean b(Context context, int i10, TypedValue typedValue, boolean z10, boolean z11, int i11, Object obj) {
        if ((i11 & 2) != 0) {
            typedValue = new TypedValue();
        }
        if ((i11 & 4) != 0) {
            z10 = true;
        }
        if ((i11 & 8) != 0) {
            z11 = false;
        }
        return a(context, i10, typedValue, z10, z11);
    }

    public static final int c(Context context, int i10, TypedValue typedValue, boolean z10) {
        Intrinsics.checkNotNullParameter(context, "<this>");
        Intrinsics.checkNotNullParameter(typedValue, "typedValue");
        context.getTheme().resolveAttribute(i10, typedValue, z10);
        return typedValue.data;
    }

    public static /* synthetic */ int d(Context context, int i10, TypedValue typedValue, boolean z10, int i11, Object obj) {
        if ((i11 & 2) != 0) {
            typedValue = new TypedValue();
        }
        if ((i11 & 4) != 0) {
            z10 = true;
        }
        return c(context, i10, typedValue, z10);
    }

    public static final Integer e(Context context, int i10, TypedValue typedValue, boolean z10) {
        Intrinsics.checkNotNullParameter(context, "<this>");
        Intrinsics.checkNotNullParameter(typedValue, "typedValue");
        context.getTheme().resolveAttribute(i10, typedValue, z10);
        if (typedValue.type == 0) {
            return null;
        }
        return Integer.valueOf(typedValue.resourceId);
    }

    public static /* synthetic */ Integer f(Context context, int i10, TypedValue typedValue, boolean z10, int i11, Object obj) {
        if ((i11 & 2) != 0) {
            typedValue = new TypedValue();
        }
        if ((i11 & 4) != 0) {
            z10 = true;
        }
        return e(context, i10, typedValue, z10);
    }

    public static final Integer g(Context context, String resourceName, t resourceType) {
        Intrinsics.checkNotNullParameter(context, "<this>");
        Intrinsics.checkNotNullParameter(resourceName, "resourceName");
        Intrinsics.checkNotNullParameter(resourceType, "resourceType");
        String b10 = h.b(resourceName);
        String resourcePackageName = context.getResources().getResourcePackageName(m.f49096j);
        int identifier = context.getResources().getIdentifier(b10, resourceType.name(), resourcePackageName);
        if (identifier <= 0) {
            Resources resources = context.getResources();
            String lowerCase = resourceType.name().toLowerCase(Locale.ROOT);
            Intrinsics.checkNotNullExpressionValue(lowerCase, "toLowerCase(...)");
            identifier = resources.getIdentifier(b10, lowerCase, resourcePackageName);
        }
        if (identifier > 0) {
            return Integer.valueOf(identifier);
        }
        return null;
    }
}
