package c2;

import android.os.Bundle;
import android.text.style.ClickableSpan;
import android.view.View;
import androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a extends ClickableSpan {

    /* renamed from: d  reason: collision with root package name */
    private final int f7963d;

    /* renamed from: e  reason: collision with root package name */
    private final AccessibilityNodeInfoCompat f7964e;

    /* renamed from: i  reason: collision with root package name */
    private final int f7965i;

    public a(int i10, AccessibilityNodeInfoCompat accessibilityNodeInfoCompat, int i11) {
        this.f7963d = i10;
        this.f7964e = accessibilityNodeInfoCompat;
        this.f7965i = i11;
    }

    @Override // android.text.style.ClickableSpan
    public void onClick(View view) {
        Bundle bundle = new Bundle();
        bundle.putInt("ACCESSIBILITY_CLICKABLE_SPAN_ID", this.f7963d);
        this.f7964e.m0(this.f7965i, bundle);
    }
}
