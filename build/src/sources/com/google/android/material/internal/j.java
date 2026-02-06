package com.google.android.material.internal;

import android.content.Context;
import android.graphics.Typeface;
import android.text.TextPaint;
import java.lang.ref.WeakReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class j {

    /* renamed from: c  reason: collision with root package name */
    private float f15170c;

    /* renamed from: d  reason: collision with root package name */
    private float f15171d;

    /* renamed from: g  reason: collision with root package name */
    private nh.d f15174g;

    /* renamed from: a  reason: collision with root package name */
    private final TextPaint f15168a = new TextPaint(1);

    /* renamed from: b  reason: collision with root package name */
    private final nh.f f15169b = new a();

    /* renamed from: e  reason: collision with root package name */
    private boolean f15172e = true;

    /* renamed from: f  reason: collision with root package name */
    private WeakReference f15173f = new WeakReference(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends nh.f {
        a() {
        }

        @Override // nh.f
        public void a(int i10) {
            j.this.f15172e = true;
            b bVar = (b) j.this.f15173f.get();
            if (bVar != null) {
                bVar.a();
            }
        }

        @Override // nh.f
        public void b(Typeface typeface, boolean z10) {
            if (!z10) {
                j.this.f15172e = true;
                b bVar = (b) j.this.f15173f.get();
                if (bVar != null) {
                    bVar.a();
                }
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface b {
        void a();

        int[] getState();

        boolean onStateChange(int[] iArr);
    }

    public j(b bVar) {
        i(bVar);
    }

    private float c(String str) {
        if (str == null) {
            return 0.0f;
        }
        return Math.abs(this.f15168a.getFontMetrics().ascent);
    }

    private float d(CharSequence charSequence) {
        if (charSequence == null) {
            return 0.0f;
        }
        return this.f15168a.measureText(charSequence, 0, charSequence.length());
    }

    private void h(String str) {
        this.f15170c = d(str);
        this.f15171d = c(str);
        this.f15172e = false;
    }

    public nh.d e() {
        return this.f15174g;
    }

    public TextPaint f() {
        return this.f15168a;
    }

    public float g(String str) {
        if (!this.f15172e) {
            return this.f15170c;
        }
        h(str);
        return this.f15170c;
    }

    public void i(b bVar) {
        this.f15173f = new WeakReference(bVar);
    }

    public void j(nh.d dVar, Context context) {
        if (this.f15174g != dVar) {
            this.f15174g = dVar;
            if (dVar != null) {
                dVar.o(context, this.f15168a, this.f15169b);
                b bVar = (b) this.f15173f.get();
                if (bVar != null) {
                    this.f15168a.drawableState = bVar.getState();
                }
                dVar.n(context, this.f15168a, this.f15169b);
                this.f15172e = true;
            }
            b bVar2 = (b) this.f15173f.get();
            if (bVar2 != null) {
                bVar2.a();
                bVar2.onStateChange(bVar2.getState());
            }
        }
    }

    public void k(boolean z10) {
        this.f15172e = z10;
    }

    public void l(Context context) {
        this.f15174g.n(context, this.f15168a, this.f15169b);
    }
}
