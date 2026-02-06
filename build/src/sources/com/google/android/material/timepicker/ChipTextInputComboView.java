package com.google.android.material.timepicker;

import ah.h;
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
import androidx.core.view.h0;
import com.google.android.material.chip.Chip;
import com.google.android.material.internal.k;
import com.google.android.material.internal.o;
import com.google.android.material.textfield.TextInputLayout;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class ChipTextInputComboView extends FrameLayout implements Checkable {

    /* renamed from: d  reason: collision with root package name */
    private final Chip f15557d;

    /* renamed from: e  reason: collision with root package name */
    private final TextInputLayout f15558e;

    /* renamed from: i  reason: collision with root package name */
    private final EditText f15559i;

    /* renamed from: o  reason: collision with root package name */
    private TextWatcher f15560o;

    /* renamed from: p  reason: collision with root package name */
    private TextView f15561p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private class b extends k {
        private b() {
        }

        @Override // android.text.TextWatcher
        public void afterTextChanged(Editable editable) {
            if (!TextUtils.isEmpty(editable)) {
                String c10 = ChipTextInputComboView.this.c(editable);
                Chip chip = ChipTextInputComboView.this.f15557d;
                if (TextUtils.isEmpty(c10)) {
                    c10 = ChipTextInputComboView.this.c("00");
                }
                chip.setText(c10);
                return;
            }
            ChipTextInputComboView.this.f15557d.setText(ChipTextInputComboView.this.c("00"));
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
        this.f15559i.setImeHintLocales(getContext().getResources().getConfiguration().getLocales());
    }

    @Override // android.widget.Checkable
    public boolean isChecked() {
        return this.f15557d.isChecked();
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
        this.f15557d.setChecked(z10);
        EditText editText = this.f15559i;
        if (z10) {
            i10 = 0;
        } else {
            i10 = 4;
        }
        editText.setVisibility(i10);
        Chip chip = this.f15557d;
        if (z10) {
            i11 = 8;
        } else {
            i11 = 0;
        }
        chip.setVisibility(i11);
        if (isChecked()) {
            o.m(this.f15559i, false);
        }
    }

    @Override // android.view.View
    public void setOnClickListener(View.OnClickListener onClickListener) {
        this.f15557d.setOnClickListener(onClickListener);
    }

    @Override // android.view.View
    public void setTag(int i10, Object obj) {
        this.f15557d.setTag(i10, obj);
    }

    @Override // android.widget.Checkable
    public void toggle() {
        this.f15557d.toggle();
    }

    public ChipTextInputComboView(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        LayoutInflater from = LayoutInflater.from(context);
        Chip chip = (Chip) from.inflate(h.f760j, (ViewGroup) this, false);
        this.f15557d = chip;
        chip.setAccessibilityClassName("android.view.View");
        TextInputLayout textInputLayout = (TextInputLayout) from.inflate(h.f761k, (ViewGroup) this, false);
        this.f15558e = textInputLayout;
        EditText editText = textInputLayout.getEditText();
        this.f15559i = editText;
        editText.setVisibility(4);
        b bVar = new b();
        this.f15560o = bVar;
        editText.addTextChangedListener(bVar);
        d();
        addView(chip);
        addView(textInputLayout);
        this.f15561p = (TextView) findViewById(ah.f.f735p);
        editText.setId(h0.k());
        h0.B0(this.f15561p, editText.getId());
        editText.setSaveEnabled(false);
        editText.setLongClickable(false);
    }
}
