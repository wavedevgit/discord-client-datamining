package com.swmansion.rnscreens.gamma.stack.screen;

import android.view.ViewGroup;
import androidx.fragment.app.Fragment;
import androidx.lifecycle.LifecycleOwner;
import com.facebook.react.uimanager.ThemedReactContext;
import com.swmansion.rnscreens.gamma.stack.host.k;
import java.lang.ref.WeakReference;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.MutablePropertyReference1Impl;
import kotlin.jvm.internal.Reflection;
import kotlin.properties.ReadWriteProperty;
import kotlin.reflect.KProperty;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a extends ViewGroup implements sn.a {

    /* renamed from: r  reason: collision with root package name */
    static final /* synthetic */ KProperty[] f19192r = {Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "activityMode", "getActivityMode()Lcom/swmansion/rnscreens/gamma/stack/screen/StackScreen$ActivityMode;", 0))};

    /* renamed from: d  reason: collision with root package name */
    private final ThemedReactContext f19193d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f19194e;

    /* renamed from: i  reason: collision with root package name */
    private WeakReference f19195i;

    /* renamed from: o  reason: collision with root package name */
    private final ReadWriteProperty f19196o;

    /* renamed from: p  reason: collision with root package name */
    private String f19197p;

    /* renamed from: q  reason: collision with root package name */
    public c f19198q;

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* renamed from: com.swmansion.rnscreens.gamma.stack.screen.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class EnumC0229a {

        /* renamed from: d  reason: collision with root package name */
        public static final EnumC0229a f19199d = new EnumC0229a("DETACHED", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final EnumC0229a f19200e = new EnumC0229a("ATTACHED", 1);

        /* renamed from: i  reason: collision with root package name */
        private static final /* synthetic */ EnumC0229a[] f19201i;

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f19202o;

        static {
            EnumC0229a[] a10 = a();
            f19201i = a10;
            f19202o = hs.a.a(a10);
        }

        private EnumC0229a(String str, int i10) {
        }

        private static final /* synthetic */ EnumC0229a[] a() {
            return new EnumC0229a[]{f19199d, f19200e};
        }

        public static EnumC0229a valueOf(String str) {
            return (EnumC0229a) Enum.valueOf(EnumC0229a.class, str);
        }

        public static EnumC0229a[] values() {
            return (EnumC0229a[]) f19201i.clone();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends kotlin.properties.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ a f19203a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(Object obj, a aVar) {
            super(obj);
            this.f19203a = aVar;
        }

        @Override // kotlin.properties.c
        protected void afterChange(KProperty property, Object obj, Object obj2) {
            k kVar;
            Intrinsics.checkNotNullParameter(property, "property");
            if (((EnumC0229a) obj) != ((EnumC0229a) obj2) && (kVar = this.f19203a.getStackHost$react_native_screens_release().get()) != null) {
                kVar.e(this.f19203a);
            }
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public a(ThemedReactContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.f19193d = reactContext;
        this.f19195i = new WeakReference(null);
        kotlin.properties.a aVar = kotlin.properties.a.f32643a;
        this.f19196o = new b(EnumC0229a.f19199d, this);
    }

    public final com.swmansion.rnscreens.gamma.stack.screen.b a(LifecycleOwner viewLifecycleOwner) {
        Intrinsics.checkNotNullParameter(viewLifecycleOwner, "viewLifecycleOwner");
        return new com.swmansion.rnscreens.gamma.stack.screen.b(viewLifecycleOwner.getLifecycle(), getEventEmitter$react_native_screens_release());
    }

    public final boolean b() {
        return this.f19194e;
    }

    public final void c() {
        if (getActivityMode() == EnumC0229a.f19200e) {
            setNativelyDismissed$react_native_screens_release(true);
        }
        getEventEmitter$react_native_screens_release().h(this.f19194e);
    }

    public final void d() {
        if (getId() != -1) {
            setEventEmitter$react_native_screens_release(new c(this.f19193d, getId()));
            return;
        }
        throw new IllegalStateException("[RNScreens] StackScreen must have its tag set when registering event emitters");
    }

    @NotNull
    public final EnumC0229a getActivityMode() {
        return (EnumC0229a) this.f19196o.getValue(this, f19192r[0]);
    }

    @Override // sn.a
    public Fragment getAssociatedFragment() {
        Fragment a10 = rn.c.a(this);
        if (a10 != null) {
            if (a10 instanceof d) {
                return a10;
            }
            String simpleName = a10.getClass().getSimpleName();
            throw new IllegalStateException(("[RNScreens] Unexpected fragment type: " + simpleName).toString());
        }
        return null;
    }

    @NotNull
    public final c getEventEmitter$react_native_screens_release() {
        c cVar = this.f19198q;
        if (cVar != null) {
            return cVar;
        }
        Intrinsics.throwUninitializedPropertyAccessException("eventEmitter");
        return null;
    }

    public final String getScreenKey() {
        return this.f19197p;
    }

    @NotNull
    public final WeakReference<k> getStackHost$react_native_screens_release() {
        return this.f19195i;
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
    }

    public final void setActivityMode(@NotNull EnumC0229a enumC0229a) {
        Intrinsics.checkNotNullParameter(enumC0229a, "<set-?>");
        this.f19196o.setValue(this, f19192r[0], enumC0229a);
    }

    public final void setEventEmitter$react_native_screens_release(@NotNull c cVar) {
        Intrinsics.checkNotNullParameter(cVar, "<set-?>");
        this.f19198q = cVar;
    }

    public final void setNativelyDismissed$react_native_screens_release(boolean z10) {
        if (z10) {
            this.f19194e = true;
            return;
        }
        throw new IllegalArgumentException("[RNScreens] Natively dismissed StackScreen must remain dismissed.");
    }

    public final void setScreenKey(String str) {
        if (this.f19197p == null) {
            this.f19197p = str;
            return;
        }
        throw new IllegalArgumentException("[RNScreens] StackScreen can't change its screenKey.");
    }

    public final void setStackHost$react_native_screens_release(@NotNull WeakReference<k> weakReference) {
        Intrinsics.checkNotNullParameter(weakReference, "<set-?>");
        this.f19195i = weakReference;
    }
}
