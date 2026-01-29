package com.google.android.material.internal;

import android.content.Context;
import android.graphics.Typeface;
import android.text.TextPaint;
import java.lang.ref.WeakReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class j {

    /* renamed from: c  reason: collision with root package name */
    private float f16199c;

    /* renamed from: d  reason: collision with root package name */
    private float f16200d;

    /* renamed from: g  reason: collision with root package name */
    private lh.d f16203g;

    /* renamed from: a  reason: collision with root package name */
    private final TextPaint f16197a = new TextPaint(1);

    /* renamed from: b  reason: collision with root package name */
    private final lh.f f16198b = new a();

    /* renamed from: e  reason: collision with root package name */
    private boolean f16201e = true;

    /* renamed from: f  reason: collision with root package name */
    private WeakReference f16202f = new WeakReference(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends lh.f {
        a() {
        }

        @Override // lh.f
        public void a(int i10) {
            j.this.f16201e = true;
            b bVar = (b) j.this.f16202f.get();
            if (bVar != null) {
                bVar.a();
            }
        }

        @Override // lh.f
        public void b(Typeface typeface, boolean z10) {
            if (!z10) {
                j.this.f16201e = true;
                b bVar = (b) j.this.f16202f.get();
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
        return Math.abs(this.f16197a.getFontMetrics().ascent);
    }

    private float d(CharSequence charSequence) {
        if (charSequence == null) {
            return 0.0f;
        }
        return this.f16197a.measureText(charSequence, 0, charSequence.length());
    }

    private void h(String str) {
        this.f16199c = d(str);
        this.f16200d = c(str);
        this.f16201e = false;
    }

    public lh.d e() {
        return this.f16203g;
    }

    public TextPaint f() {
        return this.f16197a;
    }

    public float g(String str) {
        if (!this.f16201e) {
            return this.f16199c;
        }
        h(str);
        return this.f16199c;
    }

    public void i(b bVar) {
        this.f16202f = new WeakReference(bVar);
    }

    public void j(lh.d dVar, Context context) {
        if (this.f16203g != dVar) {
            this.f16203g = dVar;
            if (dVar != null) {
                dVar.o(context, this.f16197a, this.f16198b);
                b bVar = (b) this.f16202f.get();
                if (bVar != null) {
                    this.f16197a.drawableState = bVar.getState();
                }
                dVar.n(context, this.f16197a, this.f16198b);
                this.f16201e = true;
            }
            b bVar2 = (b) this.f16202f.get();
            if (bVar2 != null) {
                bVar2.a();
                bVar2.onStateChange(bVar2.getState());
            }
        }
    }

    public void k(boolean z10) {
        this.f16201e = z10;
    }

    public void l(Context context) {
        this.f16203g.n(context, this.f16197a, this.f16198b);
    }
}
