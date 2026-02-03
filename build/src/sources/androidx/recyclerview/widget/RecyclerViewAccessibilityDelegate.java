package androidx.recyclerview.widget;

import android.os.Bundle;
import android.view.View;
import android.view.ViewGroup;
import android.view.accessibility.AccessibilityEvent;
import androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
import androidx.core.view.accessibility.AccessibilityNodeProviderCompat;
import androidx.core.view.h0;
import java.util.Map;
import java.util.WeakHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class RecyclerViewAccessibilityDelegate extends androidx.core.view.a {

    /* renamed from: a  reason: collision with root package name */
    final RecyclerView f4878a;

    /* renamed from: b  reason: collision with root package name */
    private final a f4879b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a extends androidx.core.view.a {

        /* renamed from: a  reason: collision with root package name */
        final RecyclerViewAccessibilityDelegate f4880a;

        /* renamed from: b  reason: collision with root package name */
        private Map f4881b = new WeakHashMap();

        public a(RecyclerViewAccessibilityDelegate recyclerViewAccessibilityDelegate) {
            this.f4880a = recyclerViewAccessibilityDelegate;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public androidx.core.view.a c(View view) {
            return (androidx.core.view.a) this.f4881b.remove(view);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public void d(View view) {
            androidx.core.view.a l10 = h0.l(view);
            if (l10 != null && l10 != this) {
                this.f4881b.put(view, l10);
            }
        }

        @Override // androidx.core.view.a
        public boolean dispatchPopulateAccessibilityEvent(View view, AccessibilityEvent accessibilityEvent) {
            androidx.core.view.a aVar = (androidx.core.view.a) this.f4881b.get(view);
            if (aVar != null) {
                return aVar.dispatchPopulateAccessibilityEvent(view, accessibilityEvent);
            }
            return super.dispatchPopulateAccessibilityEvent(view, accessibilityEvent);
        }

        @Override // androidx.core.view.a
        public AccessibilityNodeProviderCompat getAccessibilityNodeProvider(View view) {
            androidx.core.view.a aVar = (androidx.core.view.a) this.f4881b.get(view);
            if (aVar != null) {
                return aVar.getAccessibilityNodeProvider(view);
            }
            return super.getAccessibilityNodeProvider(view);
        }

        @Override // androidx.core.view.a
        public void onInitializeAccessibilityEvent(View view, AccessibilityEvent accessibilityEvent) {
            androidx.core.view.a aVar = (androidx.core.view.a) this.f4881b.get(view);
            if (aVar != null) {
                aVar.onInitializeAccessibilityEvent(view, accessibilityEvent);
            } else {
                super.onInitializeAccessibilityEvent(view, accessibilityEvent);
            }
        }

        @Override // androidx.core.view.a
        public void onInitializeAccessibilityNodeInfo(View view, AccessibilityNodeInfoCompat accessibilityNodeInfoCompat) {
            if (!this.f4880a.d() && this.f4880a.f4878a.getLayoutManager() != null) {
                this.f4880a.f4878a.getLayoutManager().onInitializeAccessibilityNodeInfoForItem(view, accessibilityNodeInfoCompat);
                androidx.core.view.a aVar = (androidx.core.view.a) this.f4881b.get(view);
                if (aVar != null) {
                    aVar.onInitializeAccessibilityNodeInfo(view, accessibilityNodeInfoCompat);
                    return;
                } else {
                    super.onInitializeAccessibilityNodeInfo(view, accessibilityNodeInfoCompat);
                    return;
                }
            }
            super.onInitializeAccessibilityNodeInfo(view, accessibilityNodeInfoCompat);
        }

        @Override // androidx.core.view.a
        public void onPopulateAccessibilityEvent(View view, AccessibilityEvent accessibilityEvent) {
            androidx.core.view.a aVar = (androidx.core.view.a) this.f4881b.get(view);
            if (aVar != null) {
                aVar.onPopulateAccessibilityEvent(view, accessibilityEvent);
            } else {
                super.onPopulateAccessibilityEvent(view, accessibilityEvent);
            }
        }

        @Override // androidx.core.view.a
        public boolean onRequestSendAccessibilityEvent(ViewGroup viewGroup, View view, AccessibilityEvent accessibilityEvent) {
            androidx.core.view.a aVar = (androidx.core.view.a) this.f4881b.get(viewGroup);
            if (aVar != null) {
                return aVar.onRequestSendAccessibilityEvent(viewGroup, view, accessibilityEvent);
            }
            return super.onRequestSendAccessibilityEvent(viewGroup, view, accessibilityEvent);
        }

        @Override // androidx.core.view.a
        public boolean performAccessibilityAction(View view, int i10, Bundle bundle) {
            if (!this.f4880a.d() && this.f4880a.f4878a.getLayoutManager() != null) {
                androidx.core.view.a aVar = (androidx.core.view.a) this.f4881b.get(view);
                if (aVar != null) {
                    if (aVar.performAccessibilityAction(view, i10, bundle)) {
                        return true;
                    }
                } else if (super.performAccessibilityAction(view, i10, bundle)) {
                    return true;
                }
                return this.f4880a.f4878a.getLayoutManager().performAccessibilityActionForItem(view, i10, bundle);
            }
            return super.performAccessibilityAction(view, i10, bundle);
        }

        @Override // androidx.core.view.a
        public void sendAccessibilityEvent(View view, int i10) {
            androidx.core.view.a aVar = (androidx.core.view.a) this.f4881b.get(view);
            if (aVar != null) {
                aVar.sendAccessibilityEvent(view, i10);
            } else {
                super.sendAccessibilityEvent(view, i10);
            }
        }

        @Override // androidx.core.view.a
        public void sendAccessibilityEventUnchecked(View view, AccessibilityEvent accessibilityEvent) {
            androidx.core.view.a aVar = (androidx.core.view.a) this.f4881b.get(view);
            if (aVar != null) {
                aVar.sendAccessibilityEventUnchecked(view, accessibilityEvent);
            } else {
                super.sendAccessibilityEventUnchecked(view, accessibilityEvent);
            }
        }
    }

    public RecyclerViewAccessibilityDelegate(RecyclerView recyclerView) {
        this.f4878a = recyclerView;
        androidx.core.view.a c10 = c();
        if (c10 != null && (c10 instanceof a)) {
            this.f4879b = (a) c10;
        } else {
            this.f4879b = new a(this);
        }
    }

    public androidx.core.view.a c() {
        return this.f4879b;
    }

    boolean d() {
        return this.f4878a.hasPendingAdapterUpdates();
    }

    @Override // androidx.core.view.a
    public void onInitializeAccessibilityEvent(View view, AccessibilityEvent accessibilityEvent) {
        super.onInitializeAccessibilityEvent(view, accessibilityEvent);
        if ((view instanceof RecyclerView) && !d()) {
            RecyclerView recyclerView = (RecyclerView) view;
            if (recyclerView.getLayoutManager() != null) {
                recyclerView.getLayoutManager().onInitializeAccessibilityEvent(accessibilityEvent);
            }
        }
    }

    @Override // androidx.core.view.a
    public void onInitializeAccessibilityNodeInfo(View view, AccessibilityNodeInfoCompat accessibilityNodeInfoCompat) {
        super.onInitializeAccessibilityNodeInfo(view, accessibilityNodeInfoCompat);
        if (!d() && this.f4878a.getLayoutManager() != null) {
            this.f4878a.getLayoutManager().onInitializeAccessibilityNodeInfo(accessibilityNodeInfoCompat);
        }
    }

    @Override // androidx.core.view.a
    public boolean performAccessibilityAction(View view, int i10, Bundle bundle) {
        if (super.performAccessibilityAction(view, i10, bundle)) {
            return true;
        }
        if (!d() && this.f4878a.getLayoutManager() != null) {
            return this.f4878a.getLayoutManager().performAccessibilityAction(i10, bundle);
        }
        return false;
    }
}
