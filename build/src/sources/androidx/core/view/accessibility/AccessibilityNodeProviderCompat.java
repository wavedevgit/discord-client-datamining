package androidx.core.view.accessibility;

import android.os.Build;
import android.os.Bundle;
import android.view.accessibility.AccessibilityNodeInfo;
import android.view.accessibility.AccessibilityNodeProvider;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class AccessibilityNodeProviderCompat {

    /* renamed from: a  reason: collision with root package name */
    private final Object f3341a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class a extends AccessibilityNodeProvider {

        /* renamed from: a  reason: collision with root package name */
        final AccessibilityNodeProviderCompat f3342a;

        a(AccessibilityNodeProviderCompat accessibilityNodeProviderCompat) {
            this.f3342a = accessibilityNodeProviderCompat;
        }

        @Override // android.view.accessibility.AccessibilityNodeProvider
        public AccessibilityNodeInfo createAccessibilityNodeInfo(int i10) {
            AccessibilityNodeInfoCompat b10 = this.f3342a.b(i10);
            if (b10 == null) {
                return null;
            }
            return b10.g1();
        }

        @Override // android.view.accessibility.AccessibilityNodeProvider
        public List findAccessibilityNodeInfosByText(String str, int i10) {
            List c10 = this.f3342a.c(str, i10);
            if (c10 == null) {
                return null;
            }
            ArrayList arrayList = new ArrayList();
            int size = c10.size();
            for (int i11 = 0; i11 < size; i11++) {
                arrayList.add(((AccessibilityNodeInfoCompat) c10.get(i11)).g1());
            }
            return arrayList;
        }

        @Override // android.view.accessibility.AccessibilityNodeProvider
        public AccessibilityNodeInfo findFocus(int i10) {
            AccessibilityNodeInfoCompat d10 = this.f3342a.d(i10);
            if (d10 == null) {
                return null;
            }
            return d10.g1();
        }

        @Override // android.view.accessibility.AccessibilityNodeProvider
        public boolean performAction(int i10, int i11, Bundle bundle) {
            return this.f3342a.f(i10, i11, bundle);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class b extends a {
        b(AccessibilityNodeProviderCompat accessibilityNodeProviderCompat) {
            super(accessibilityNodeProviderCompat);
        }

        @Override // android.view.accessibility.AccessibilityNodeProvider
        public void addExtraDataToAccessibilityNodeInfo(int i10, AccessibilityNodeInfo accessibilityNodeInfo, String str, Bundle bundle) {
            this.f3342a.a(i10, AccessibilityNodeInfoCompat.h1(accessibilityNodeInfo), str, bundle);
        }
    }

    public AccessibilityNodeProviderCompat() {
        if (Build.VERSION.SDK_INT >= 26) {
            this.f3341a = new b(this);
        } else {
            this.f3341a = new a(this);
        }
    }

    public void a(int i10, AccessibilityNodeInfoCompat accessibilityNodeInfoCompat, String str, Bundle bundle) {
    }

    public AccessibilityNodeInfoCompat b(int i10) {
        return null;
    }

    public List c(String str, int i10) {
        return null;
    }

    public AccessibilityNodeInfoCompat d(int i10) {
        return null;
    }

    public Object e() {
        return this.f3341a;
    }

    public boolean f(int i10, int i11, Bundle bundle) {
        return false;
    }

    public AccessibilityNodeProviderCompat(Object obj) {
        this.f3341a = obj;
    }
}
