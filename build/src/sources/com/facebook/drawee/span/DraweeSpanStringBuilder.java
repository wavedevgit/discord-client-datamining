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
    private final Set f10808d;

    /* renamed from: e  reason: collision with root package name */
    private final Set f10809e;

    /* renamed from: i  reason: collision with root package name */
    private final b f10810i;

    /* renamed from: o  reason: collision with root package name */
    private View f10811o;

    /* renamed from: p  reason: collision with root package name */
    private Drawable f10812p;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class b implements Drawable.Callback {
        private b() {
        }

        @Override // android.graphics.drawable.Drawable.Callback
        public void invalidateDrawable(Drawable drawable) {
            if (DraweeSpanStringBuilder.this.f10811o != null) {
                DraweeSpanStringBuilder.this.f10811o.invalidate();
            } else if (DraweeSpanStringBuilder.this.f10812p != null) {
                DraweeSpanStringBuilder.this.f10812p.invalidateSelf();
            }
        }

        @Override // android.graphics.drawable.Drawable.Callback
        public void scheduleDrawable(Drawable drawable, Runnable runnable, long j10) {
            if (DraweeSpanStringBuilder.this.f10811o != null) {
                DraweeSpanStringBuilder.this.f10811o.postDelayed(runnable, j10 - SystemClock.uptimeMillis());
            } else if (DraweeSpanStringBuilder.this.f10812p != null) {
                DraweeSpanStringBuilder.this.f10812p.scheduleSelf(runnable, j10);
            }
        }

        @Override // android.graphics.drawable.Drawable.Callback
        public void unscheduleDrawable(Drawable drawable, Runnable runnable) {
            if (DraweeSpanStringBuilder.this.f10811o != null) {
                DraweeSpanStringBuilder.this.f10811o.removeCallbacks(runnable);
            } else if (DraweeSpanStringBuilder.this.f10812p != null) {
                DraweeSpanStringBuilder.this.f10812p.unscheduleSelf(runnable);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class c extends i9.a {

        /* renamed from: d  reason: collision with root package name */
        private final com.facebook.drawee.span.a f10814d;

        /* renamed from: e  reason: collision with root package name */
        private final boolean f10815e;

        /* renamed from: i  reason: collision with root package name */
        private final int f10816i;

        public c(com.facebook.drawee.span.a aVar, boolean z10, int i10) {
            j.g(aVar);
            this.f10814d = aVar;
            this.f10815e = z10;
            this.f10816i = i10;
        }

        @Override // i9.a, com.facebook.drawee.controller.ControllerListener
        /* renamed from: a */
        public void onFinalImageSet(String str, ImageInfo imageInfo, Animatable animatable) {
            if (this.f10815e && imageInfo != null && this.f10814d.f().g() != null) {
                Drawable g10 = this.f10814d.f().g();
                Rect bounds = g10.getBounds();
                int i10 = this.f10816i;
                if (i10 != -1) {
                    int height = (int) ((i10 / imageInfo.getHeight()) * imageInfo.getWidth());
                    if (bounds.width() != height || bounds.height() != this.f10816i) {
                        g10.setBounds(0, 0, height, this.f10816i);
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
        this.f10808d = new HashSet();
        this.f10809e = new HashSet();
        this.f10810i = new b();
    }

    static /* synthetic */ d c(DraweeSpanStringBuilder draweeSpanStringBuilder) {
        draweeSpanStringBuilder.getClass();
        return null;
    }

    protected void d(View view) {
        m();
        this.f10811o = view;
    }

    void e() {
        for (com.facebook.drawee.span.a aVar : this.f10808d) {
            aVar.g();
        }
        Iterator it = this.f10809e.iterator();
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
        for (com.facebook.drawee.span.a aVar : this.f10808d) {
            aVar.h();
        }
        for (Object obj : this.f10809e) {
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
            g10.setCallback(this.f10810i);
        }
        com.facebook.drawee.span.a aVar = new com.facebook.drawee.span.a(draweeHolder, i14);
        DraweeController e10 = draweeHolder.e();
        if (e10 instanceof com.facebook.drawee.controller.a) {
            ((com.facebook.drawee.controller.a) e10).e(new c(aVar, z10, i13));
        }
        this.f10808d.add(aVar);
        setSpan(aVar, i10, i11 + 1, 33);
    }

    protected void l(Drawable drawable) {
        if (drawable != this.f10812p) {
            return;
        }
        this.f10812p = null;
    }

    protected void m() {
        View view = this.f10811o;
        if (view != null) {
            n(view);
        }
        Drawable drawable = this.f10812p;
        if (drawable != null) {
            l(drawable);
        }
    }

    protected void n(View view) {
        if (view != this.f10811o) {
            return;
        }
        this.f10811o = null;
    }

    public DraweeSpanStringBuilder(CharSequence charSequence) {
        super(charSequence);
        this.f10808d = new HashSet();
        this.f10809e = new HashSet();
        this.f10810i = new b();
    }
}
