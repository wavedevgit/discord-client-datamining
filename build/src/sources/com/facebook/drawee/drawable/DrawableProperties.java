package com.facebook.drawee.drawable;

import android.graphics.ColorFilter;
import android.graphics.drawable.Drawable;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DrawableProperties {

    /* renamed from: f  reason: collision with root package name */
    public static final a f11027f = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private boolean f11029b;

    /* renamed from: c  reason: collision with root package name */
    private ColorFilter f11030c;

    /* renamed from: a  reason: collision with root package name */
    private int f11028a = -1;

    /* renamed from: d  reason: collision with root package name */
    private int f11031d = -1;

    /* renamed from: e  reason: collision with root package name */
    private int f11032e = -1;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public final void a(Drawable drawable) {
        boolean z10;
        if (drawable != null) {
            int i10 = this.f11028a;
            if (i10 != -1) {
                drawable.setAlpha(i10);
            }
            if (this.f11029b) {
                drawable.setColorFilter(this.f11030c);
            }
            int i11 = this.f11031d;
            boolean z11 = false;
            if (i11 != -1) {
                if (i11 != 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                drawable.setDither(z10);
            }
            int i12 = this.f11032e;
            if (i12 != -1) {
                if (i12 != 0) {
                    z11 = true;
                }
                drawable.setFilterBitmap(z11);
            }
        }
    }

    public final void b(int i10) {
        this.f11028a = i10;
    }

    public final void c(ColorFilter colorFilter) {
        boolean z10;
        this.f11030c = colorFilter;
        if (colorFilter != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f11029b = z10;
    }

    public final void d(boolean z10) {
        this.f11031d = z10 ? 1 : 0;
    }

    public final void e(boolean z10) {
        this.f11032e = z10 ? 1 : 0;
    }
}
