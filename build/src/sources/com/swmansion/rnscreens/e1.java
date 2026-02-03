package com.swmansion.rnscreens;

import android.content.res.ColorStateList;
import android.graphics.drawable.Drawable;
import android.view.View;
import android.widget.EditText;
import android.widget.ImageView;
import androidx.appcompat.widget.SearchView;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e1 {

    /* renamed from: a  reason: collision with root package name */
    private SearchView f17874a;

    /* renamed from: b  reason: collision with root package name */
    private Integer f17875b;

    /* renamed from: c  reason: collision with root package name */
    private Drawable f17876c;

    public e1(SearchView searchView) {
        Intrinsics.checkNotNullParameter(searchView, "searchView");
        this.f17874a = searchView;
    }

    private final ImageView a() {
        return (ImageView) this.f17874a.findViewById(f.f.f22971z);
    }

    private final EditText b() {
        View findViewById = this.f17874a.findViewById(f.f.E);
        if (findViewById instanceof EditText) {
            return (EditText) findViewById;
        }
        return null;
    }

    private final ImageView c() {
        return (ImageView) this.f17874a.findViewById(f.f.f22970y);
    }

    private final View d() {
        return this.f17874a.findViewById(f.f.D);
    }

    public final void e(Integer num) {
        if (num != null) {
            int intValue = num.intValue();
            c().setColorFilter(intValue);
            a().setColorFilter(intValue);
        }
    }

    public final void f(Integer num) {
        if (num != null) {
            int intValue = num.intValue();
            EditText b10 = b();
            if (b10 != null) {
                b10.setHintTextColor(intValue);
            }
        }
    }

    public final void g(String placeholder, boolean z10) {
        Intrinsics.checkNotNullParameter(placeholder, "placeholder");
        if (z10) {
            this.f17874a.setQueryHint(placeholder);
            return;
        }
        EditText b10 = b();
        if (b10 != null) {
            b10.setHint(placeholder);
        }
    }

    public final void h(Integer num) {
        EditText b10;
        Integer num2;
        ColorStateList textColors;
        Integer num3 = this.f17875b;
        if (num != null) {
            if (num3 == null) {
                EditText b11 = b();
                if (b11 != null && (textColors = b11.getTextColors()) != null) {
                    num2 = Integer.valueOf(textColors.getDefaultColor());
                } else {
                    num2 = null;
                }
                this.f17875b = num2;
            }
            EditText b12 = b();
            if (b12 != null) {
                b12.setTextColor(num.intValue());
            }
        } else if (num3 != null && (b10 = b()) != null) {
            b10.setTextColor(num3.intValue());
        }
    }

    public final void i(Integer num) {
        Drawable drawable = this.f17876c;
        if (num != null) {
            if (drawable == null) {
                this.f17876c = d().getBackground();
            }
            d().setBackgroundColor(num.intValue());
        } else if (drawable != null) {
            d().setBackground(drawable);
        }
    }
}
