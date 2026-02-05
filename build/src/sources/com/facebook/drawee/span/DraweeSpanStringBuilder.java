package com.facebook.drawee.span;

import android.content.Context;
import android.graphics.Rect;
import android.graphics.drawable.Animatable;
import android.graphics.drawable.Drawable;
import android.os.SystemClock;
import android.text.SpannableStringBuilder;
import android.view.View;
import com.facebook.drawee.interfaces.DraweeController;
import com.facebook.drawee.interfaces.DraweeHierarchy;
import com.facebook.drawee.view.DraweeHolder;
import com.facebook.imagepipeline.image.ImageInfo;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;
import o8.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class DraweeSpanStringBuilder extends SpannableStringBuilder {

    /* renamed from: d  reason: collision with root package name */
    private final Set f10161d;

    /* renamed from: e  reason: collision with root package name */
    private final Set f10162e;

    /* renamed from: i  reason: collision with root package name */
    private final b f10163i;

    /* renamed from: o  reason: collision with root package name */
    private View f10164o;

    /* renamed from: p  reason: collision with root package name */
    private Drawable f10165p;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class b implements Drawable.Callback {
        private b() {
        }

        @Override // android.graphics.drawable.Drawable.Callback
        public void invalidateDrawable(Drawable drawable) {
            if (DraweeSpanStringBuilder.this.f10164o != null) {
                DraweeSpanStringBuilder.this.f10164o.invalidate();
            } else if (DraweeSpanStringBuilder.this.f10165p != null) {
                DraweeSpanStringBuilder.this.f10165p.invalidateSelf();
            }
        }

        @Override // android.graphics.drawable.Drawable.Callback
        public void scheduleDrawable(Drawable drawable, Runnable runnable, long j10) {
            if (DraweeSpanStringBuilder.this.f10164o != null) {
                DraweeSpanStringBuilder.this.f10164o.postDelayed(runnable, j10 - SystemClock.uptimeMillis());
            } else if (DraweeSpanStringBuilder.this.f10165p != null) {
                DraweeSpanStringBuilder.this.f10165p.scheduleSelf(runnable, j10);
            }
        }

        @Override // android.graphics.drawable.Drawable.Callback
        public void unscheduleDrawable(Drawable drawable, Runnable runnable) {
            if (DraweeSpanStringBuilder.this.f10164o != null) {
                DraweeSpanStringBuilder.this.f10164o.removeCallbacks(runnable);
            } else if (DraweeSpanStringBuilder.this.f10165p != null) {
                DraweeSpanStringBuilder.this.f10165p.unscheduleSelf(runnable);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class c extends i9.a {

        /* renamed from: d  reason: collision with root package name */
        private final com.facebook.drawee.span.a f10167d;

        /* renamed from: e  reason: collision with root package name */
        private final boolean f10168e;

        /* renamed from: i  reason: collision with root package name */
        private final int f10169i;

        public c(com.facebook.drawee.span.a aVar, boolean z10, int i10) {
            j.g(aVar);
            this.f10167d = aVar;
            this.f10168e = z10;
            this.f10169i = i10;
        }

        @Override // i9.a, com.facebook.drawee.controller.ControllerListener
        /* renamed from: a */
        public void onFinalImageSet(String str, ImageInfo imageInfo, Animatable animatable) {
            if (this.f10168e && imageInfo != null && this.f10167d.f().g() != null) {
                Drawable g10 = this.f10167d.f().g();
                Rect bounds = g10.getBounds();
                int i10 = this.f10169i;
                if (i10 != -1) {
                    int height = (int) ((i10 / imageInfo.getHeight()) * imageInfo.getWidth());
                    if (bounds.width() != height || bounds.height() != this.f10169i) {
                        g10.setBounds(0, 0, height, this.f10169i);
                        DraweeSpanStringBuilder.c(DraweeSpanStringBuilder.this);
                    }
                } else if (bounds.width() != imageInfo.getWidth() || bounds.height() != imageInfo.getHeight()) {
                    g10.setBounds(0, 0, imageInfo.getWidth(), imageInfo.getHeight());
                    DraweeSpanStringBuilder.c(DraweeSpanStringBuilder.this);
                }
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface d {
    }

    public DraweeSpanStringBuilder() {
        this.f10161d = new HashSet();
        this.f10162e = new HashSet();
        this.f10163i = new b();
    }

    static /* synthetic */ d c(DraweeSpanStringBuilder draweeSpanStringBuilder) {
        draweeSpanStringBuilder.getClass();
        return null;
    }

    protected void d(View view) {
        m();
        this.f10164o = view;
    }

    void e() {
        for (com.facebook.drawee.span.a aVar : this.f10161d) {
            aVar.g();
        }
        Iterator it = this.f10162e.iterator();
        if (!it.hasNext()) {
            return;
        }
        android.support.v4.media.session.b.a(it.next());
        throw null;
    }

    public void f(View view) {
        d(view);
        e();
    }

    void g() {
        for (com.facebook.drawee.span.a aVar : this.f10161d) {
            aVar.h();
        }
        for (Object obj : this.f10162e) {
            android.support.v4.media.session.b.a(obj);
            ca.b.a(null);
        }
    }

    public void h(View view) {
        n(view);
        g();
    }

    public void i(Context context, DraweeHierarchy draweeHierarchy, DraweeController draweeController, int i10, int i11, int i12, int i13, boolean z10, int i14) {
        DraweeHolder c10 = DraweeHolder.c(draweeHierarchy, context);
        c10.p(draweeController);
        k(c10, i10, i11, i12, i13, z10, i14);
    }

    public void j(Context context, DraweeHierarchy draweeHierarchy, DraweeController draweeController, int i10, int i11, int i12, boolean z10, int i13) {
        i(context, draweeHierarchy, draweeController, i10, i10, i11, i12, z10, i13);
    }

    public void k(DraweeHolder draweeHolder, int i10, int i11, int i12, int i13, boolean z10, int i14) {
        if (i11 >= length()) {
            return;
        }
        Drawable g10 = draweeHolder.g();
        if (g10 != null) {
            if (g10.getBounds().isEmpty()) {
                g10.setBounds(0, 0, i12, i13);
            }
            g10.setCallback(this.f10163i);
        }
        com.facebook.drawee.span.a aVar = new com.facebook.drawee.span.a(draweeHolder, i14);
        DraweeController e10 = draweeHolder.e();
        if (e10 instanceof com.facebook.drawee.controller.a) {
            ((com.facebook.drawee.controller.a) e10).e(new c(aVar, z10, i13));
        }
        this.f10161d.add(aVar);
        setSpan(aVar, i10, i11 + 1, 33);
    }

    protected void l(Drawable drawable) {
        if (drawable != this.f10165p) {
            return;
        }
        this.f10165p = null;
    }

    protected void m() {
        View view = this.f10164o;
        if (view != null) {
            n(view);
        }
        Drawable drawable = this.f10165p;
        if (drawable != null) {
            l(drawable);
        }
    }

    protected void n(View view) {
        if (view != this.f10164o) {
            return;
        }
        this.f10164o = null;
    }

    public DraweeSpanStringBuilder(CharSequence charSequence) {
        super(charSequence);
        this.f10161d = new HashSet();
        this.f10162e = new HashSet();
        this.f10163i = new b();
    }
}
