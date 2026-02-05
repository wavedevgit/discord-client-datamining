package androidx.appcompat.widget;

import android.content.Context;
import android.graphics.Rect;
import android.util.AttributeSet;
import android.util.TypedValue;
import android.widget.FrameLayout;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class ContentFrameLayout extends FrameLayout {

    /* renamed from: d  reason: collision with root package name */
    private TypedValue f1591d;

    /* renamed from: e  reason: collision with root package name */
    private TypedValue f1592e;

    /* renamed from: i  reason: collision with root package name */
    private TypedValue f1593i;

    /* renamed from: o  reason: collision with root package name */
    private TypedValue f1594o;

    /* renamed from: p  reason: collision with root package name */
    private TypedValue f1595p;

    /* renamed from: q  reason: collision with root package name */
    private TypedValue f1596q;

    /* renamed from: r  reason: collision with root package name */
    private final Rect f1597r;

    /* renamed from: s  reason: collision with root package name */
    private a f1598s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        void a();

        void onDetachedFromWindow();
    }

    public ContentFrameLayout(Context context) {
        this(context, null);
    }

    public void a(int i10, int i11, int i12, int i13) {
        this.f1597r.set(i10, i11, i12, i13);
        if (isLaidOut()) {
            requestLayout();
        }
    }

    public TypedValue getFixedHeightMajor() {
        if (this.f1595p == null) {
            this.f1595p = new TypedValue();
        }
        return this.f1595p;
    }

    public TypedValue getFixedHeightMinor() {
        if (this.f1596q == null) {
            this.f1596q = new TypedValue();
        }
        return this.f1596q;
    }

    public TypedValue getFixedWidthMajor() {
        if (this.f1593i == null) {
            this.f1593i = new TypedValue();
        }
        return this.f1593i;
    }

    public TypedValue getFixedWidthMinor() {
        if (this.f1594o == null) {
            this.f1594o = new TypedValue();
        }
        return this.f1594o;
    }

    public TypedValue getMinWidthMajor() {
        if (this.f1591d == null) {
            this.f1591d = new TypedValue();
        }
        return this.f1591d;
    }

    public TypedValue getMinWidthMinor() {
        if (this.f1592e == null) {
            this.f1592e = new TypedValue();
        }
        return this.f1592e;
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        a aVar = this.f1598s;
        if (aVar != null) {
            aVar.a();
        }
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        a aVar = this.f1598s;
        if (aVar != null) {
            aVar.onDetachedFromWindow();
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:21:0x004a  */
    /* JADX WARN: Removed duplicated region for block: B:24:0x0063  */
    /* JADX WARN: Removed duplicated region for block: B:37:0x0086  */
    /* JADX WARN: Removed duplicated region for block: B:42:0x00ab  */
    /* JADX WARN: Removed duplicated region for block: B:43:0x00ae  */
    /* JADX WARN: Removed duplicated region for block: B:48:0x00b8  */
    /* JADX WARN: Removed duplicated region for block: B:50:0x00be  */
    /* JADX WARN: Removed duplicated region for block: B:54:0x00cc  */
    /* JADX WARN: Removed duplicated region for block: B:56:0x00d6  */
    /* JADX WARN: Removed duplicated region for block: B:59:0x00de  */
    /* JADX WARN: Removed duplicated region for block: B:61:? A[RETURN, SYNTHETIC] */
    @Override // android.widget.FrameLayout, android.view.View
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    protected void onMeasure(int r14, int r15) {
        /*
            Method dump skipped, instructions count: 226
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.appcompat.widget.ContentFrameLayout.onMeasure(int, int):void");
    }

    public void setAttachListener(a aVar) {
        this.f1598s = aVar;
    }

    public ContentFrameLayout(@NonNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0);
    }

    public ContentFrameLayout(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        this.f1597r = new Rect();
    }
}
