package c2;

import android.os.Bundle;
import android.text.style.ClickableSpan;
import android.view.View;
import androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a extends ClickableSpan {

    /* renamed from: d  reason: collision with root package name */
    private final int f7994d;

    /* renamed from: e  reason: collision with root package name */
    private final AccessibilityNodeInfoCompat f7995e;

    /* renamed from: i  reason: collision with root package name */
    private final int f7996i;

    public a(int i10, AccessibilityNodeInfoCompat accessibilityNodeInfoCompat, int i11) {
        this.f7994d = i10;
        this.f7995e = accessibilityNodeInfoCompat;
        this.f7996i = i11;
    }

    @Override // android.text.style.ClickableSpan
    public void onClick(View view) {
        Bundle bundle = new Bundle();
        bundle.putInt("ACCESSIBILITY_CLICKABLE_SPAN_ID", this.f7994d);
        this.f7995e.m0(this.f7996i, bundle);
    }
}
