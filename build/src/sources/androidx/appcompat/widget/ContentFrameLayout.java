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
    private TypedValue f1920d;

    /* renamed from: e  reason: collision with root package name */
    private TypedValue f1921e;

    /* renamed from: i  reason: collision with root package name */
    private TypedValue f1922i;

    /* renamed from: o  reason: collision with root package name */
    private TypedValue f1923o;

    /* renamed from: p  reason: collision with root package name */
    private TypedValue f1924p;

    /* renamed from: q  reason: collision with root package name */
    private TypedValue f1925q;

    /* renamed from: r  reason: collision with root package name */
    private final Rect f1926r;

    /* renamed from: s  reason: collision with root package name */
    private a f1927s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        void a();

        void onDetachedFromWindow();
    }

    public ContentFrameLayout(Context context) {
        this(context, null);
    }

    public void a(int i10, int i11, int i12, int i13) {
        this.f1926r.set(i10, i11, i12, i13);
        if (isLaidOut()) {
            requestLayout();
        }
    }

    public TypedValue getFixedHeightMajor() {
        if (this.f1924p == null) {
            this.f1924p = new TypedValue();
        }
        return this.f1924p;
    }

    public TypedValue getFixedHeightMinor() {
        if (this.f1925q == null) {
            this.f1925q = new TypedValue();
        }
        return this.f1925q;
    }

    public TypedValue getFixedWidthMajor() {
        if (this.f1922i == null) {
            this.f1922i = new TypedValue();
        }
        return this.f1922i;
    }

    public TypedValue getFixedWidthMinor() {
        if (this.f1923o == null) {
            this.f1923o = new TypedValue();
        }
        return this.f1923o;
    }

    public TypedValue getMinWidthMajor() {
        if (this.f1920d == null) {
            this.f1920d = new TypedValue();
        }
        return this.f1920d;
    }

    public TypedValue getMinWidthMinor() {
        if (this.f1921e == null) {
            this.f1921e = new TypedValue();
        }
        return this.f1921e;
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        a aVar = this.f1927s;
        if (aVar != null) {
            aVar.a();
        }
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        a aVar = this.f1927s;
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
        this.f1927s = aVar;
    }

    public ContentFrameLayout(@NonNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0);
    }

    public ContentFrameLayout(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        this.f1926r = new Rect();
    }
}
