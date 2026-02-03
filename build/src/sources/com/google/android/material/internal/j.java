package com.google.android.material.internal;

import android.content.Context;
import android.graphics.Typeface;
import android.text.TextPaint;
import java.lang.ref.WeakReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class j {

    /* renamed from: c  reason: collision with root package name */
    private float f14796c;

    /* renamed from: d  reason: collision with root package name */
    private float f14797d;

    /* renamed from: g  reason: collision with root package name */
    private lh.d f14800g;

    /* renamed from: a  reason: collision with root package name */
    private final TextPaint f14794a = new TextPaint(1);

    /* renamed from: b  reason: collision with root package name */
    private final lh.f f14795b = new a();

    /* renamed from: e  reason: collision with root package name */
    private boolean f14798e = true;

    /* renamed from: f  reason: collision with root package name */
    private WeakReference f14799f = new WeakReference(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends lh.f {
        a() {
        }

        @Override // lh.f
        public void a(int i10) {
            j.this.f14798e = true;
            b bVar = (b) j.this.f14799f.get();
            if (bVar != null) {
                bVar.a();
            }
        }

        @Override // lh.f
        public void b(Typeface typeface, boolean z10) {
            if (!z10) {
                j.this.f14798e = true;
                b bVar = (b) j.this.f14799f.get();
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
        return Math.abs(this.f14794a.getFontMetrics().ascent);
    }

    private float d(CharSequence charSequence) {
        if (charSequence == null) {
            return 0.0f;
        }
        return this.f14794a.measureText(charSequence, 0, charSequence.length());
    }

    private void h(String str) {
        this.f14796c = d(str);
        this.f14797d = c(str);
        this.f14798e = false;
    }

    public lh.d e() {
        return this.f14800g;
    }

    public TextPaint f() {
        return this.f14794a;
    }

    public float g(String str) {
        if (!this.f14798e) {
            return this.f14796c;
        }
        h(str);
        return this.f14796c;
    }

    public void i(b bVar) {
        this.f14799f = new WeakReference(bVar);
    }

    public void j(lh.d dVar, Context context) {
        if (this.f14800g != dVar) {
            this.f14800g = dVar;
            if (dVar != null) {
                dVar.o(context, this.f14794a, this.f14795b);
                b bVar = (b) this.f14799f.get();
                if (bVar != null) {
                    this.f14794a.drawableState = bVar.getState();
                }
                dVar.n(context, this.f14794a, this.f14795b);
                this.f14798e = true;
            }
            b bVar2 = (b) this.f14799f.get();
            if (bVar2 != null) {
                bVar2.a();
                bVar2.onStateChange(bVar2.getState());
            }
        }
    }

    public void k(boolean z10) {
        this.f14798e = z10;
    }

    public void l(Context context) {
        this.f14800g.n(context, this.f14794a, this.f14795b);
    }
}
