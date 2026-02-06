package com.google.android.material.textfield;

import android.content.Context;
import android.text.Editable;
import android.view.View;
import android.view.accessibility.AccessibilityEvent;
import android.widget.EditText;
import androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
import c2.c;
import com.google.android.material.internal.CheckableImageButton;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class s {

    /* renamed from: a  reason: collision with root package name */
    final TextInputLayout f15506a;

    /* renamed from: b  reason: collision with root package name */
    final r f15507b;

    /* renamed from: c  reason: collision with root package name */
    final Context f15508c;

    /* renamed from: d  reason: collision with root package name */
    final CheckableImageButton f15509d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public s(r rVar) {
        this.f15506a = rVar.f15484d;
        this.f15507b = rVar;
        this.f15508c = rVar.getContext();
        this.f15509d = rVar.r();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a(Editable editable) {
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b(CharSequence charSequence, int i10, int i11, int i12) {
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int c() {
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int d() {
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public View.OnFocusChangeListener e() {
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public View.OnClickListener f() {
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public View.OnFocusChangeListener g() {
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c.a h() {
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean i(int i10) {
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean j() {
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean k() {
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean l() {
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean m() {
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void n(EditText editText) {
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void o(View view, AccessibilityNodeInfoCompat accessibilityNodeInfoCompat) {
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void p(View view, AccessibilityEvent accessibilityEvent) {
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void q(boolean z10) {
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void r() {
        this.f15507b.L(false);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void s() {
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean t() {
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void u() {
    }
}
