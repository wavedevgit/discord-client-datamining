package com.google.android.material.internal;

import android.content.Context;
import android.graphics.Typeface;
import android.text.TextPaint;
import java.lang.ref.WeakReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class j {

    /* renamed from: c  reason: collision with root package name */
    private float f15190c;

    /* renamed from: d  reason: collision with root package name */
    private float f15191d;

    /* renamed from: g  reason: collision with root package name */
    private mh.d f15194g;

    /* renamed from: a  reason: collision with root package name */
    private final TextPaint f15188a = new TextPaint(1);

    /* renamed from: b  reason: collision with root package name */
    private final mh.f f15189b = new a();

    /* renamed from: e  reason: collision with root package name */
    private boolean f15192e = true;

    /* renamed from: f  reason: collision with root package name */
    private WeakReference f15193f = new WeakReference(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends mh.f {
        a() {
        }

        @Override // mh.f
        public void a(int i10) {
            j.this.f15192e = true;
            b bVar = (b) j.this.f15193f.get();
            if (bVar != null) {
                bVar.a();
            }
        }

        @Override // mh.f
        public void b(Typeface typeface, boolean z10) {
            if (!z10) {
                j.this.f15192e = true;
                b bVar = (b) j.this.f15193f.get();
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
        return Math.abs(this.f15188a.getFontMetrics().ascent);
    }

    private float d(CharSequence charSequence) {
        if (charSequence == null) {
            return 0.0f;
        }
        return this.f15188a.measureText(charSequence, 0, charSequence.length());
    }

    private void h(String str) {
        this.f15190c = d(str);
        this.f15191d = c(str);
        this.f15192e = false;
    }

    public mh.d e() {
        return this.f15194g;
    }

    public TextPaint f() {
        return this.f15188a;
    }

    public float g(String str) {
        if (!this.f15192e) {
            return this.f15190c;
        }
        h(str);
        return this.f15190c;
    }

    public void i(b bVar) {
        this.f15193f = new WeakReference(bVar);
    }

    public void j(mh.d dVar, Context context) {
        if (this.f15194g != dVar) {
            this.f15194g = dVar;
            if (dVar != null) {
                dVar.o(context, this.f15188a, this.f15189b);
                b bVar = (b) this.f15193f.get();
                if (bVar != null) {
                    this.f15188a.drawableState = bVar.getState();
                }
                dVar.n(context, this.f15188a, this.f15189b);
                this.f15192e = true;
            }
            b bVar2 = (b) this.f15193f.get();
            if (bVar2 != null) {
                bVar2.a();
                bVar2.onStateChange(bVar2.getState());
            }
        }
    }

    public void k(boolean z10) {
        this.f15192e = z10;
    }

    public void l(Context context) {
        this.f15194g.n(context, this.f15188a, this.f15189b);
    }
}
