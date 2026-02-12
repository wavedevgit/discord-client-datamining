package com.google.android.material.internal;

import android.content.Context;
import android.graphics.Typeface;
import android.text.TextPaint;
import java.lang.ref.WeakReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class j {

    /* renamed from: c  reason: collision with root package name */
    private float f15921c;

    /* renamed from: d  reason: collision with root package name */
    private float f15922d;

    /* renamed from: g  reason: collision with root package name */
    private qh.d f15925g;

    /* renamed from: a  reason: collision with root package name */
    private final TextPaint f15919a = new TextPaint(1);

    /* renamed from: b  reason: collision with root package name */
    private final qh.f f15920b = new a();

    /* renamed from: e  reason: collision with root package name */
    private boolean f15923e = true;

    /* renamed from: f  reason: collision with root package name */
    private WeakReference f15924f = new WeakReference(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends qh.f {
        a() {
        }

        @Override // qh.f
        public void a(int i10) {
            j.this.f15923e = true;
            b bVar = (b) j.this.f15924f.get();
            if (bVar != null) {
                bVar.a();
            }
        }

        @Override // qh.f
        public void b(Typeface typeface, boolean z10) {
            if (!z10) {
                j.this.f15923e = true;
                b bVar = (b) j.this.f15924f.get();
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
        return Math.abs(this.f15919a.getFontMetrics().ascent);
    }

    private float d(CharSequence charSequence) {
        if (charSequence == null) {
            return 0.0f;
        }
        return this.f15919a.measureText(charSequence, 0, charSequence.length());
    }

    private void i(String str) {
        this.f15921c = d(str);
        this.f15922d = c(str);
        this.f15923e = false;
    }

    public qh.d e() {
        return this.f15925g;
    }

    public float f(String str) {
        if (!this.f15923e) {
            return this.f15922d;
        }
        i(str);
        return this.f15922d;
    }

    public TextPaint g() {
        return this.f15919a;
    }

    public float h(String str) {
        if (!this.f15923e) {
            return this.f15921c;
        }
        i(str);
        return this.f15921c;
    }

    public void j(b bVar) {
        this.f15924f = new WeakReference(bVar);
    }

    public void k(qh.d dVar, Context context) {
        if (this.f15925g != dVar) {
            this.f15925g = dVar;
            if (dVar != null) {
                dVar.q(context, this.f15919a, this.f15920b);
                b bVar = (b) this.f15924f.get();
                if (bVar != null) {
                    this.f15919a.drawableState = bVar.getState();
                }
                dVar.p(context, this.f15919a, this.f15920b);
                this.f15923e = true;
            }
            b bVar2 = (b) this.f15924f.get();
            if (bVar2 != null) {
                bVar2.a();
                bVar2.onStateChange(bVar2.getState());
            }
        }
    }

    public void l(boolean z10) {
        this.f15923e = z10;
    }

    public void m(boolean z10) {
        this.f15923e = z10;
    }

    public void n(Context context) {
        this.f15925g.p(context, this.f15919a, this.f15920b);
    }
}
