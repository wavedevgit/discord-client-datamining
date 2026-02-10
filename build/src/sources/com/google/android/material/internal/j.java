package com.google.android.material.internal;

import android.content.Context;
import android.graphics.Typeface;
import android.text.TextPaint;
import java.lang.ref.WeakReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class j {

    /* renamed from: c  reason: collision with root package name */
    private float f15310c;

    /* renamed from: d  reason: collision with root package name */
    private float f15311d;

    /* renamed from: g  reason: collision with root package name */
    private oh.d f15314g;

    /* renamed from: a  reason: collision with root package name */
    private final TextPaint f15308a = new TextPaint(1);

    /* renamed from: b  reason: collision with root package name */
    private final oh.f f15309b = new a();

    /* renamed from: e  reason: collision with root package name */
    private boolean f15312e = true;

    /* renamed from: f  reason: collision with root package name */
    private WeakReference f15313f = new WeakReference(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends oh.f {
        a() {
        }

        @Override // oh.f
        public void a(int i10) {
            j.this.f15312e = true;
            b bVar = (b) j.this.f15313f.get();
            if (bVar != null) {
                bVar.a();
            }
        }

        @Override // oh.f
        public void b(Typeface typeface, boolean z10) {
            if (!z10) {
                j.this.f15312e = true;
                b bVar = (b) j.this.f15313f.get();
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
        return Math.abs(this.f15308a.getFontMetrics().ascent);
    }

    private float d(CharSequence charSequence) {
        if (charSequence == null) {
            return 0.0f;
        }
        return this.f15308a.measureText(charSequence, 0, charSequence.length());
    }

    private void h(String str) {
        this.f15310c = d(str);
        this.f15311d = c(str);
        this.f15312e = false;
    }

    public oh.d e() {
        return this.f15314g;
    }

    public TextPaint f() {
        return this.f15308a;
    }

    public float g(String str) {
        if (!this.f15312e) {
            return this.f15310c;
        }
        h(str);
        return this.f15310c;
    }

    public void i(b bVar) {
        this.f15313f = new WeakReference(bVar);
    }

    public void j(oh.d dVar, Context context) {
        if (this.f15314g != dVar) {
            this.f15314g = dVar;
            if (dVar != null) {
                dVar.o(context, this.f15308a, this.f15309b);
                b bVar = (b) this.f15313f.get();
                if (bVar != null) {
                    this.f15308a.drawableState = bVar.getState();
                }
                dVar.n(context, this.f15308a, this.f15309b);
                this.f15312e = true;
            }
            b bVar2 = (b) this.f15313f.get();
            if (bVar2 != null) {
                bVar2.a();
                bVar2.onStateChange(bVar2.getState());
            }
        }
    }

    public void k(boolean z10) {
        this.f15312e = z10;
    }

    public void l(Context context) {
        this.f15314g.n(context, this.f15308a, this.f15309b);
    }
}
