package com.google.android.exoplayer2.ui;

import android.text.Spannable;
import android.text.SpannableString;
import android.text.Spanned;
import android.text.style.AbsoluteSizeSpan;
import android.text.style.RelativeSizeSpan;
import ii.n;
import zd.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class i {
    public static /* synthetic */ boolean a(Object obj) {
        if (!(obj instanceof AbsoluteSizeSpan) && !(obj instanceof RelativeSizeSpan)) {
            return false;
        }
        return true;
    }

    public static /* synthetic */ boolean b(Object obj) {
        return !(obj instanceof de.b);
    }

    public static void c(b.C0779b c0779b) {
        c0779b.b();
        if (c0779b.e() instanceof Spanned) {
            if (!(c0779b.e() instanceof Spannable)) {
                c0779b.o(SpannableString.valueOf(c0779b.e()));
            }
            e((Spannable) ne.a.e(c0779b.e()), new n() { // from class: com.google.android.exoplayer2.ui.g
                @Override // ii.n
                public final boolean apply(Object obj) {
                    return i.b(obj);
                }
            });
        }
        d(c0779b);
    }

    public static void d(b.C0779b c0779b) {
        c0779b.q(-3.4028235E38f, Integer.MIN_VALUE);
        if (c0779b.e() instanceof Spanned) {
            if (!(c0779b.e() instanceof Spannable)) {
                c0779b.o(SpannableString.valueOf(c0779b.e()));
            }
            e((Spannable) ne.a.e(c0779b.e()), new n() { // from class: com.google.android.exoplayer2.ui.h
                @Override // ii.n
                public final boolean apply(Object obj) {
                    return i.a(obj);
                }
            });
        }
    }

    private static void e(Spannable spannable, n nVar) {
        Object[] spans;
        for (Object obj : spannable.getSpans(0, spannable.length(), Object.class)) {
            if (nVar.apply(obj)) {
                spannable.removeSpan(obj);
            }
        }
    }

    public static float f(int i10, float f10, int i11, int i12) {
        float f11;
        if (f10 == -3.4028235E38f) {
            return -3.4028235E38f;
        }
        if (i10 == 0) {
            f11 = i12;
        } else if (i10 != 1) {
            if (i10 != 2) {
                return -3.4028235E38f;
            }
            return f10;
        } else {
            f11 = i11;
        }
        return f10 * f11;
    }
}
