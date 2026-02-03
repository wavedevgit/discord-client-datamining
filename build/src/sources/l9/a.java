package l9;

import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.drawable.Drawable;
import android.util.AttributeSet;
import com.facebook.drawee.drawable.ScalingUtils$ScaleType;
import com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a {
    public static Drawable a(Context context, TypedArray typedArray, int i10) {
        int resourceId = typedArray.getResourceId(i10, 0);
        if (resourceId == 0) {
            return null;
        }
        return context.getDrawable(resourceId);
    }

    private static com.facebook.drawee.generic.a b(GenericDraweeHierarchyBuilder genericDraweeHierarchyBuilder) {
        if (genericDraweeHierarchyBuilder.s() == null) {
            genericDraweeHierarchyBuilder.K(new com.facebook.drawee.generic.a());
        }
        return genericDraweeHierarchyBuilder.s();
    }

    public static ScalingUtils$ScaleType c(TypedArray typedArray, int i10) {
        switch (typedArray.getInt(i10, -2)) {
            case -1:
                return null;
            case 0:
                return ScalingUtils$ScaleType.f10662a;
            case 1:
                return ScalingUtils$ScaleType.f10665d;
            case 2:
                return ScalingUtils$ScaleType.f10666e;
            case 3:
                return ScalingUtils$ScaleType.f10667f;
            case 4:
                return ScalingUtils$ScaleType.f10668g;
            case 5:
                return ScalingUtils$ScaleType.f10669h;
            case 6:
                return ScalingUtils$ScaleType.f10670i;
            case 7:
                return ScalingUtils$ScaleType.f10671j;
            case 8:
                return ScalingUtils$ScaleType.f10672k;
            default:
                throw new RuntimeException("XML attribute not specified!");
        }
    }

    public static GenericDraweeHierarchyBuilder d(Context context, AttributeSet attributeSet) {
        if (ya.b.d()) {
            ya.b.a("GenericDraweeHierarchyBuilder#inflateBuilder");
        }
        GenericDraweeHierarchyBuilder e10 = e(new GenericDraweeHierarchyBuilder(context.getResources()), context, attributeSet);
        if (ya.b.d()) {
            ya.b.b();
        }
        return e10;
    }

    /* JADX WARN: Code restructure failed: missing block: B:115:0x01c4, code lost:
        if (r13 != false) goto L121;
     */
    /* JADX WARN: Code restructure failed: missing block: B:116:0x01c6, code lost:
        r4 = true;
     */
    /* JADX WARN: Code restructure failed: missing block: B:131:0x01e4, code lost:
        if (r15 != false) goto L121;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static com.facebook.drawee.generic.GenericDraweeHierarchyBuilder e(com.facebook.drawee.generic.GenericDraweeHierarchyBuilder r17, android.content.Context r18, android.util.AttributeSet r19) {
        /*
            Method dump skipped, instructions count: 569
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: l9.a.e(com.facebook.drawee.generic.GenericDraweeHierarchyBuilder, android.content.Context, android.util.AttributeSet):com.facebook.drawee.generic.GenericDraweeHierarchyBuilder");
    }
}
