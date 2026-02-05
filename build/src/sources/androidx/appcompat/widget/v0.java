package androidx.appcompat.widget;

import android.content.Context;
import android.content.res.ColorStateList;
import android.content.res.TypedArray;
import android.graphics.Typeface;
import android.graphics.drawable.Drawable;
import android.util.AttributeSet;
import android.util.TypedValue;
import q1.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class v0 {

    /* renamed from: a  reason: collision with root package name */
    private final Context f1952a;

    /* renamed from: b  reason: collision with root package name */
    private final TypedArray f1953b;

    /* renamed from: c  reason: collision with root package name */
    private TypedValue f1954c;

    private v0(Context context, TypedArray typedArray) {
        this.f1952a = context;
        this.f1953b = typedArray;
    }

    public static v0 t(Context context, int i10, int[] iArr) {
        return new v0(context, context.obtainStyledAttributes(i10, iArr));
    }

    public static v0 u(Context context, AttributeSet attributeSet, int[] iArr) {
        return new v0(context, context.obtainStyledAttributes(attributeSet, iArr));
    }

    public static v0 v(Context context, AttributeSet attributeSet, int[] iArr, int i10, int i11) {
        return new v0(context, context.obtainStyledAttributes(attributeSet, iArr, i10, i11));
    }

    public boolean a(int i10, boolean z10) {
        return this.f1953b.getBoolean(i10, z10);
    }

    public int b(int i10, int i11) {
        return this.f1953b.getColor(i10, i11);
    }

    public ColorStateList c(int i10) {
        int resourceId;
        ColorStateList a10;
        if (this.f1953b.hasValue(i10) && (resourceId = this.f1953b.getResourceId(i10, 0)) != 0 && (a10 = g.a.a(this.f1952a, resourceId)) != null) {
            return a10;
        }
        return this.f1953b.getColorStateList(i10);
    }

    public float d(int i10, float f10) {
        return this.f1953b.getDimension(i10, f10);
    }

    public int e(int i10, int i11) {
        return this.f1953b.getDimensionPixelOffset(i10, i11);
    }

    public int f(int i10, int i11) {
        return this.f1953b.getDimensionPixelSize(i10, i11);
    }

    public Drawable g(int i10) {
        int resourceId;
        if (this.f1953b.hasValue(i10) && (resourceId = this.f1953b.getResourceId(i10, 0)) != 0) {
            return g.a.b(this.f1952a, resourceId);
        }
        return this.f1953b.getDrawable(i10);
    }

    public Drawable h(int i10) {
        int resourceId;
        if (this.f1953b.hasValue(i10) && (resourceId = this.f1953b.getResourceId(i10, 0)) != 0) {
            return j.b().d(this.f1952a, resourceId, true);
        }
        return null;
    }

    public float i(int i10, float f10) {
        return this.f1953b.getFloat(i10, f10);
    }

    public Typeface j(int i10, int i11, j.f fVar) {
        int resourceId = this.f1953b.getResourceId(i10, 0);
        if (resourceId == 0) {
            return null;
        }
        if (this.f1954c == null) {
            this.f1954c = new TypedValue();
        }
        return q1.j.j(this.f1952a, resourceId, this.f1954c, i11, fVar);
    }

    public int k(int i10, int i11) {
        return this.f1953b.getInt(i10, i11);
    }

    public int l(int i10, int i11) {
        return this.f1953b.getInteger(i10, i11);
    }

    public int m(int i10, int i11) {
        return this.f1953b.getLayoutDimension(i10, i11);
    }

    public int n(int i10, int i11) {
        return this.f1953b.getResourceId(i10, i11);
    }

    public String o(int i10) {
        return this.f1953b.getString(i10);
    }

    public CharSequence p(int i10) {
        return this.f1953b.getText(i10);
    }

    public CharSequence[] q(int i10) {
        return this.f1953b.getTextArray(i10);
    }

    public TypedArray r() {
        return this.f1953b;
    }

    public boolean s(int i10) {
        return this.f1953b.hasValue(i10);
    }

    public TypedValue w(int i10) {
        return this.f1953b.peekValue(i10);
    }

    public void x() {
        this.f1953b.recycle();
    }
}
