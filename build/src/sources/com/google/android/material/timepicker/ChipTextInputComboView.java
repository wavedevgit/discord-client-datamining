package com.google.android.material.timepicker;

import android.content.Context;
import android.content.res.Configuration;
import android.text.Editable;
import android.text.TextUtils;
import android.text.TextWatcher;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Checkable;
import android.widget.EditText;
import android.widget.FrameLayout;
import android.widget.TextView;
import androidx.annotation.NonNull;
import bh.h;
import com.google.android.material.chip.Chip;
import com.google.android.material.internal.l;
import com.google.android.material.internal.p;
import com.google.android.material.textfield.TextInputLayout;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class ChipTextInputComboView extends FrameLayout implements Checkable {

    /* renamed from: d  reason: collision with root package name */
    private final Chip f16447d;

    /* renamed from: e  reason: collision with root package name */
    private final TextInputLayout f16448e;

    /* renamed from: i  reason: collision with root package name */
    private final EditText f16449i;

    /* renamed from: o  reason: collision with root package name */
    private TextWatcher f16450o;

    /* renamed from: p  reason: collision with root package name */
    private TextView f16451p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private class b extends l {
        private b() {
        }

        @Override // android.text.TextWatcher
        public void afterTextChanged(Editable editable) {
            if (!TextUtils.isEmpty(editable)) {
                String c10 = ChipTextInputComboView.this.c(editable);
                Chip chip = ChipTextInputComboView.this.f16447d;
                if (TextUtils.isEmpty(c10)) {
                    c10 = ChipTextInputComboView.this.c("00");
                }
                chip.setText(c10);
                return;
            }
            ChipTextInputComboView.this.f16447d.setText(ChipTextInputComboView.this.c("00"));
        }
    }

    public ChipTextInputComboView(@NonNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public String c(CharSequence charSequence) {
        return e.a(getResources(), charSequence);
    }

    private void d() {
        this.f16449i.setImeHintLocales(getContext().getResources().getConfiguration().getLocales());
    }

    @Override // android.widget.Checkable
    public boolean isChecked() {
        return this.f16447d.isChecked();
    }

    @Override // android.view.View
    protected void onConfigurationChanged(Configuration configuration) {
        super.onConfigurationChanged(configuration);
        d();
    }

    @Override // android.widget.Checkable
    public void setChecked(boolean z10) {
        int i10;
        int i11;
        this.f16447d.setChecked(z10);
        EditText editText = this.f16449i;
        if (z10) {
            i10 = 0;
        } else {
            i10 = 4;
        }
        editText.setVisibility(i10);
        Chip chip = this.f16447d;
        if (z10) {
            i11 = 8;
        } else {
            i11 = 0;
        }
        chip.setVisibility(i11);
        if (isChecked()) {
            p.m(this.f16449i, false);
        }
    }

    @Override // android.view.View
    public void setOnClickListener(View.OnClickListener onClickListener) {
        this.f16447d.setOnClickListener(onClickListener);
    }

    @Override // android.view.View
    public void setTag(int i10, Object obj) {
        this.f16447d.setTag(i10, obj);
    }

    @Override // android.widget.Checkable
    public void toggle() {
        this.f16447d.toggle();
    }

    public ChipTextInputComboView(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        LayoutInflater from = LayoutInflater.from(context);
        Chip chip = (Chip) from.inflate(h.f6885m, (ViewGroup) this, false);
        this.f16447d = chip;
        chip.setAccessibilityClassName("android.view.View");
        TextInputLayout textInputLayout = (TextInputLayout) from.inflate(h.f6886n, (ViewGroup) this, false);
        this.f16448e = textInputLayout;
        EditText editText = textInputLayout.getEditText();
        this.f16449i = editText;
        editText.setVisibility(4);
        b bVar = new b();
        this.f16450o = bVar;
        editText.addTextChangedListener(bVar);
        d();
        addView(chip);
        addView(textInputLayout);
        this.f16451p = (TextView) findViewById(bh.f.f6857p);
        editText.setId(View.generateViewId());
        this.f16451p.setLabelFor(editText.getId());
        editText.setSaveEnabled(false);
        editText.setLongClickable(false);
    }
}
