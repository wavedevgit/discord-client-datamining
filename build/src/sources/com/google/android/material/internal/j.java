package com.google.android.material.internal;

import android.content.Context;
import android.graphics.Typeface;
import android.text.TextPaint;
import java.lang.ref.WeakReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class j {

    /* renamed from: c  reason: collision with root package name */
    private float f15828c;

    /* renamed from: d  reason: collision with root package name */
    private float f15829d;

    /* renamed from: g  reason: collision with root package name */
    private lh.d f15832g;

    /* renamed from: a  reason: collision with root package name */
    private final TextPaint f15826a = new TextPaint(1);

    /* renamed from: b  reason: collision with root package name */
    private final lh.f f15827b = new a();

    /* renamed from: e  reason: collision with root package name */
    private boolean f15830e = true;

    /* renamed from: f  reason: collision with root package name */
    private WeakReference f15831f = new WeakReference(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends lh.f {
        a() {
        }

        @Override // lh.f
        public void a(int i10) {
            j.this.f15830e = true;
            b bVar = (b) j.this.f15831f.get();
            if (bVar != null) {
                bVar.a();
            }
        }

        @Override // lh.f
        public void b(Typeface typeface, boolean z10) {
            if (!z10) {
                j.this.f15830e = true;
                b bVar = (b) j.this.f15831f.get();
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
        return Math.abs(this.f15826a.getFontMetrics().ascent);
    }

    private float d(CharSequence charSequence) {
        if (charSequence == null) {
            return 0.0f;
        }
        return this.f15826a.measureText(charSequence, 0, charSequence.length());
    }

    private void h(String str) {
        this.f15828c = d(str);
        this.f15829d = c(str);
        this.f15830e = false;
    }

    public lh.d e() {
        return this.f15832g;
    }

    public TextPaint f() {
        return this.f15826a;
    }

    public float g(String str) {
        if (!this.f15830e) {
            return this.f15828c;
        }
        h(str);
        return this.f15828c;
    }

    public void i(b bVar) {
        this.f15831f = new WeakReference(bVar);
    }

    public void j(lh.d dVar, Context context) {
        if (this.f15832g != dVar) {
            this.f15832g = dVar;
            if (dVar != null) {
                dVar.o(context, this.f15826a, this.f15827b);
                b bVar = (b) this.f15831f.get();
                if (bVar != null) {
                    this.f15826a.drawableState = bVar.getState();
                }
                dVar.n(context, this.f15826a, this.f15827b);
                this.f15830e = true;
            }
            b bVar2 = (b) this.f15831f.get();
            if (bVar2 != null) {
                bVar2.a();
                bVar2.onStateChange(bVar2.getState());
            }
        }
    }

    public void k(boolean z10) {
        this.f15830e = z10;
    }

    public void l(Context context) {
        this.f15832g.n(context, this.f15826a, this.f15827b);
    }
}
