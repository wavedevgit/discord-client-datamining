package c2;

import android.os.Bundle;
import android.text.style.ClickableSpan;
import android.view.View;
import androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a extends ClickableSpan {

    /* renamed from: d  reason: collision with root package name */
    private final int f6950d;

    /* renamed from: e  reason: collision with root package name */
    private final AccessibilityNodeInfoCompat f6951e;

    /* renamed from: i  reason: collision with root package name */
    private final int f6952i;

    public a(int i10, AccessibilityNodeInfoCompat accessibilityNodeInfoCompat, int i11) {
        this.f6950d = i10;
        this.f6951e = accessibilityNodeInfoCompat;
        this.f6952i = i11;
    }

    @Override // android.text.style.ClickableSpan
    public void onClick(View view) {
        Bundle bundle = new Bundle();
        bundle.putInt("ACCESSIBILITY_CLICKABLE_SPAN_ID", this.f6950d);
        this.f6951e.m0(this.f6952i, bundle);
    }
}
