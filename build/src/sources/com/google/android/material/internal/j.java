package com.google.android.material.internal;

import android.content.Context;
import android.graphics.Typeface;
import android.text.TextPaint;
import java.lang.ref.WeakReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class j {

    /* renamed from: c  reason: collision with root package name */
    private float f15920c;

    /* renamed from: d  reason: collision with root package name */
    private float f15921d;

    /* renamed from: g  reason: collision with root package name */
    private qh.d f15924g;

    /* renamed from: a  reason: collision with root package name */
    private final TextPaint f15918a = new TextPaint(1);

    /* renamed from: b  reason: collision with root package name */
    private final qh.f f15919b = new a();

    /* renamed from: e  reason: collision with root package name */
    private boolean f15922e = true;

    /* renamed from: f  reason: collision with root package name */
    private WeakReference f15923f = new WeakReference(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends qh.f {
        a() {
        }

        @Override // qh.f
        public void a(int i10) {
            j.this.f15922e = true;
            b bVar = (b) j.this.f15923f.get();
            if (bVar != null) {
                bVar.a();
            }
        }

        @Override // qh.f
        public void b(Typeface typeface, boolean z10) {
            if (!z10) {
                j.this.f15922e = true;
                b bVar = (b) j.this.f15923f.get();
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
        j(bVar);
    }

    private float c(String str) {
        if (str == null) {
            return 0.0f;
        }
        return Math.abs(this.f15918a.getFontMetrics().ascent);
    }

    private float d(CharSequence charSequence) {
        if (charSequence == null) {
            return 0.0f;
        }
        return this.f15918a.measureText(charSequence, 0, charSequence.length());
    }

    private void i(String str) {
        this.f15920c = d(str);
        this.f15921d = c(str);
        this.f15922e = false;
    }

    public qh.d e() {
        return this.f15924g;
    }

    public float f(String str) {
        if (!this.f15922e) {
            return this.f15921d;
        }
        i(str);
        return this.f15921d;
    }

    public TextPaint g() {
        return this.f15918a;
    }

    public float h(String str) {
        if (!this.f15922e) {
            return this.f15920c;
        }
        i(str);
        return this.f15920c;
    }

    public void j(b bVar) {
        this.f15923f = new WeakReference(bVar);
    }

    public void k(qh.d dVar, Context context) {
        if (this.f15924g != dVar) {
            this.f15924g = dVar;
            if (dVar != null) {
                dVar.q(context, this.f15918a, this.f15919b);
                b bVar = (b) this.f15923f.get();
                if (bVar != null) {
                    this.f15918a.drawableState = bVar.getState();
                }
                dVar.p(context, this.f15918a, this.f15919b);
                this.f15922e = true;
            }
            b bVar2 = (b) this.f15923f.get();
            if (bVar2 != null) {
                bVar2.a();
                bVar2.onStateChange(bVar2.getState());
            }
        }
    }

    public void l(boolean z10) {
        this.f15922e = z10;
    }

    public void m(boolean z10) {
        this.f15922e = z10;
    }

    public void n(Context context) {
        this.f15924g.p(context, this.f15918a, this.f15919b);
    }
}
