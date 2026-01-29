package com.google.android.exoplayer2.ui;

import android.content.Context;
import android.text.Layout;
import android.util.AttributeSet;
import android.view.MotionEvent;
import android.webkit.WebView;
import android.widget.FrameLayout;
import com.facebook.react.uimanager.ViewProps;
import com.google.android.exoplayer2.ui.SubtitleView;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import ne.w0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class k extends FrameLayout implements SubtitleView.a {

    /* renamed from: d  reason: collision with root package name */
    private final com.google.android.exoplayer2.ui.a f14313d;

    /* renamed from: e  reason: collision with root package name */
    private final WebView f14314e;

    /* renamed from: i  reason: collision with root package name */
    private List f14315i;

    /* renamed from: o  reason: collision with root package name */
    private ke.b f14316o;

    /* renamed from: p  reason: collision with root package name */
    private float f14317p;

    /* renamed from: q  reason: collision with root package name */
    private int f14318q;

    /* renamed from: r  reason: collision with root package name */
    private float f14319r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a extends WebView {
        a(Context context, AttributeSet attributeSet) {
            super(context, attributeSet);
        }

        @Override // android.webkit.WebView, android.view.View
        public boolean onTouchEvent(MotionEvent motionEvent) {
            super.onTouchEvent(motionEvent);
            return false;
        }

        @Override // android.view.View
        public boolean performClick() {
            super.performClick();
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f14321a;

        static {
            int[] iArr = new int[Layout.Alignment.values().length];
            f14321a = iArr;
            try {
                iArr[Layout.Alignment.ALIGN_NORMAL.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f14321a[Layout.Alignment.ALIGN_OPPOSITE.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f14321a[Layout.Alignment.ALIGN_CENTER.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    public k(Context context) {
        this(context, null);
    }

    private static int b(int i10) {
        if (i10 != 1) {
            return i10 != 2 ? 0 : -100;
        }
        return -50;
    }

    private static String c(Layout.Alignment alignment) {
        if (alignment == null) {
            return "center";
        }
        int i10 = b.f14321a[alignment.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                return "center";
            }
            return ViewProps.END;
        }
        return ViewProps.START;
    }

    private static String d(ke.b bVar) {
        int i10 = bVar.f33088d;
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 != 4) {
                        return "unset";
                    }
                    return w0.D("-0.05em -0.05em 0.15em %s", com.google.android.exoplayer2.ui.b.b(bVar.f33089e));
                }
                return w0.D("0.06em 0.08em 0.15em %s", com.google.android.exoplayer2.ui.b.b(bVar.f33089e));
            }
            return w0.D("0.1em 0.12em 0.15em %s", com.google.android.exoplayer2.ui.b.b(bVar.f33089e));
        }
        return w0.D("1px 1px 0 %1$s, 1px -1px 0 %1$s, -1px 1px 0 %1$s, -1px -1px 0 %1$s", com.google.android.exoplayer2.ui.b.b(bVar.f33089e));
    }

    private String e(int i10, float f10) {
        float f11 = i.f(i10, f10, getHeight(), (getHeight() - getPaddingTop()) - getPaddingBottom());
        if (f11 == -3.4028235E38f) {
            return "unset";
        }
        return w0.D("%.2fpx", Float.valueOf(f11 / getContext().getResources().getDisplayMetrics().density));
    }

    private static String f(int i10) {
        if (i10 != 1) {
            if (i10 != 2) {
                return "horizontal-tb";
            }
            return "vertical-lr";
        }
        return "vertical-rl";
    }

    private static String h(zd.b bVar) {
        String str;
        float f10 = bVar.B;
        if (f10 != 0.0f) {
            int i10 = bVar.A;
            if (i10 != 2 && i10 != 1) {
                str = "skewX";
            } else {
                str = "skewY";
            }
            return w0.D("%s(%.2fdeg)", str, Float.valueOf(f10));
        }
        return "";
    }

    /* JADX WARN: Code restructure failed: missing block: B:39:0x0145, code lost:
        if (r10 != false) goto L55;
     */
    /* JADX WARN: Code restructure failed: missing block: B:41:0x0148, code lost:
        r12 = com.facebook.react.uimanager.ViewProps.LEFT;
     */
    /* JADX WARN: Code restructure failed: missing block: B:42:0x014a, code lost:
        r21 = r12;
        r19 = com.facebook.react.uimanager.ViewProps.TOP;
     */
    /* JADX WARN: Code restructure failed: missing block: B:43:0x014f, code lost:
        if (r10 != false) goto L54;
     */
    /* JADX WARN: Removed duplicated region for block: B:26:0x00f9  */
    /* JADX WARN: Removed duplicated region for block: B:28:0x0109  */
    /* JADX WARN: Removed duplicated region for block: B:31:0x0124  */
    /* JADX WARN: Removed duplicated region for block: B:32:0x0127  */
    /* JADX WARN: Removed duplicated region for block: B:35:0x013a  */
    /* JADX WARN: Removed duplicated region for block: B:43:0x014f  */
    /* JADX WARN: Removed duplicated region for block: B:54:0x0186  */
    /* JADX WARN: Removed duplicated region for block: B:64:0x01e0  */
    /* JADX WARN: Removed duplicated region for block: B:65:0x01fa  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void i() {
        /*
            Method dump skipped, instructions count: 619
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.exoplayer2.ui.k.i():void");
    }

    @Override // com.google.android.exoplayer2.ui.SubtitleView.a
    public void a(List list, ke.b bVar, float f10, int i10, float f11) {
        this.f14316o = bVar;
        this.f14317p = f10;
        this.f14318q = i10;
        this.f14319r = f11;
        ArrayList arrayList = new ArrayList();
        ArrayList arrayList2 = new ArrayList();
        for (int i11 = 0; i11 < list.size(); i11++) {
            zd.b bVar2 = (zd.b) list.get(i11);
            if (bVar2.f55590o != null) {
                arrayList.add(bVar2);
            } else {
                arrayList2.add(bVar2);
            }
        }
        if (!this.f14315i.isEmpty() || !arrayList2.isEmpty()) {
            this.f14315i = arrayList2;
            i();
        }
        this.f14313d.a(arrayList, bVar, f10, i10, f11);
        invalidate();
    }

    public void g() {
        this.f14314e.destroy();
    }

    @Override // android.widget.FrameLayout, android.view.ViewGroup, android.view.View
    protected void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        super.onLayout(z10, i10, i11, i12, i13);
        if (z10 && !this.f14315i.isEmpty()) {
            i();
        }
    }

    public k(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f14315i = Collections.EMPTY_LIST;
        this.f14316o = ke.b.f33084g;
        this.f14317p = 0.0533f;
        this.f14318q = 0;
        this.f14319r = 0.08f;
        com.google.android.exoplayer2.ui.a aVar = new com.google.android.exoplayer2.ui.a(context, attributeSet);
        this.f14313d = aVar;
        a aVar2 = new a(context, attributeSet);
        this.f14314e = aVar2;
        aVar2.setBackgroundColor(0);
        addView(aVar);
        addView(aVar2);
    }
}
