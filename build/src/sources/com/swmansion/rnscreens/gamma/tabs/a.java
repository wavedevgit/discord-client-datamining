package com.swmansion.rnscreens.gamma.tabs;

import android.content.res.Configuration;
import android.graphics.drawable.Drawable;
import android.view.ViewGroup;
import androidx.fragment.app.Fragment;
import com.facebook.react.uimanager.ThemedReactContext;
import java.lang.ref.WeakReference;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.MutablePropertyReference1Impl;
import kotlin.jvm.internal.Reflection;
import kotlin.properties.ReadWriteProperty;
import kotlin.reflect.KProperty;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a extends ViewGroup implements sn.a {

    /* renamed from: d  reason: collision with root package name */
    private final ThemedReactContext f19208d;

    /* renamed from: e  reason: collision with root package name */
    private WeakReference f19209e;

    /* renamed from: i  reason: collision with root package name */
    public com.swmansion.rnscreens.gamma.tabs.c f19210i;

    /* renamed from: o  reason: collision with root package name */
    private String f19211o;

    /* renamed from: p  reason: collision with root package name */
    private final ReadWriteProperty f19212p;

    /* renamed from: q  reason: collision with root package name */
    private final ReadWriteProperty f19213q;

    /* renamed from: r  reason: collision with root package name */
    private final ReadWriteProperty f19214r;

    /* renamed from: s  reason: collision with root package name */
    private final ReadWriteProperty f19215s;

    /* renamed from: t  reason: collision with root package name */
    private final ReadWriteProperty f19216t;

    /* renamed from: u  reason: collision with root package name */
    private final ReadWriteProperty f19217u;

    /* renamed from: v  reason: collision with root package name */
    private final ReadWriteProperty f19218v;

    /* renamed from: w  reason: collision with root package name */
    private final ReadWriteProperty f19219w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f19220x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f19221y;

    /* renamed from: z  reason: collision with root package name */
    private boolean f19222z;
    static final /* synthetic */ KProperty[] B = {Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "tabTitle", "getTabTitle()Ljava/lang/String;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "badgeValue", "getBadgeValue()Ljava/lang/String;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "tabBarItemBadgeTextColor", "getTabBarItemBadgeTextColor()Ljava/lang/Integer;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "tabBarItemBadgeBackgroundColor", "getTabBarItemBadgeBackgroundColor()Ljava/lang/Integer;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "tabBarItemTestID", "getTabBarItemTestID()Ljava/lang/String;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "tabBarItemAccessibilityLabel", "getTabBarItemAccessibilityLabel()Ljava/lang/String;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "drawableIconResourceName", "getDrawableIconResourceName()Ljava/lang/String;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(a.class, "icon", "getIcon()Landroid/graphics/drawable/Drawable;", 0))};
    public static final C0230a A = new C0230a(null);

    /* renamed from: com.swmansion.rnscreens.gamma.tabs.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0230a {
        public /* synthetic */ C0230a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0230a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends kotlin.properties.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ a f19223a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(Object obj, a aVar) {
            super(obj);
            this.f19223a = aVar;
        }

        @Override // kotlin.properties.c
        protected void afterChange(KProperty property, Object obj, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            a aVar = this.f19223a;
            aVar.g((String) obj, (String) obj2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends kotlin.properties.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ a f19224a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(Object obj, a aVar) {
            super(obj);
            this.f19224a = aVar;
        }

        @Override // kotlin.properties.c
        protected void afterChange(KProperty property, Object obj, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            a aVar = this.f19224a;
            aVar.g((String) obj, (String) obj2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends kotlin.properties.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ a f19225a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(Object obj, a aVar) {
            super(obj);
            this.f19225a = aVar;
        }

        @Override // kotlin.properties.c
        protected void afterChange(KProperty property, Object obj, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            a aVar = this.f19225a;
            aVar.g((Integer) obj, (Integer) obj2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends kotlin.properties.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ a f19226a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(Object obj, a aVar) {
            super(obj);
            this.f19226a = aVar;
        }

        @Override // kotlin.properties.c
        protected void afterChange(KProperty property, Object obj, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            a aVar = this.f19226a;
            aVar.g((Integer) obj, (Integer) obj2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends kotlin.properties.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ a f19227a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public f(Object obj, a aVar) {
            super(obj);
            this.f19227a = aVar;
        }

        @Override // kotlin.properties.c
        protected void afterChange(KProperty property, Object obj, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            a aVar = this.f19227a;
            aVar.g((String) obj, (String) obj2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends kotlin.properties.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ a f19228a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public g(Object obj, a aVar) {
            super(obj);
            this.f19228a = aVar;
        }

        @Override // kotlin.properties.c
        protected void afterChange(KProperty property, Object obj, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            a aVar = this.f19228a;
            aVar.g((String) obj, (String) obj2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends kotlin.properties.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ a f19229a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public h(Object obj, a aVar) {
            super(obj);
            this.f19229a = aVar;
        }

        @Override // kotlin.properties.c
        protected void afterChange(KProperty property, Object obj, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            String str = (String) obj2;
            if (!Intrinsics.areEqual(str, (String) obj)) {
                a aVar = this.f19229a;
                aVar.setIcon(un.e.a(aVar.getReactContext(), str));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends kotlin.properties.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ a f19230a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public i(Object obj, a aVar) {
            super(obj);
            this.f19230a = aVar;
        }

        @Override // kotlin.properties.c
        protected void afterChange(KProperty property, Object obj, Object obj2) {
            Intrinsics.checkNotNullParameter(property, "property");
            a aVar = this.f19230a;
            aVar.g((Drawable) obj, (Drawable) obj2);
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public a(ThemedReactContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.f19208d = reactContext;
        this.f19209e = new WeakReference(null);
        kotlin.properties.a aVar = kotlin.properties.a.f32074a;
        this.f19212p = new b(null, this);
        this.f19213q = new c(null, this);
        this.f19214r = new d(null, this);
        this.f19215s = new e(null, this);
        this.f19216t = new f(null, this);
        this.f19217u = new g(null, this);
        this.f19218v = new h(null, this);
        this.f19219w = new i(null, this);
        this.f19220x = true;
        this.f19221y = true;
    }

    private final void d() {
        com.swmansion.rnscreens.gamma.tabs.b bVar = (com.swmansion.rnscreens.gamma.tabs.b) this.f19209e.get();
        if (bVar != null) {
            bVar.c(this);
        }
    }

    private final void e() {
        com.swmansion.rnscreens.gamma.tabs.b bVar = (com.swmansion.rnscreens.gamma.tabs.b) this.f19209e.get();
        if (bVar != null) {
            bVar.d(this, this.f19222z);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void g(Object obj, Object obj2) {
        if (!Intrinsics.areEqual(obj2, obj)) {
            d();
        }
    }

    public final boolean b() {
        return this.f19222z;
    }

    public final void c(com.swmansion.rnscreens.gamma.tabs.e fragment, Configuration config) {
        Intrinsics.checkNotNullParameter(fragment, "fragment");
        Intrinsics.checkNotNullParameter(config, "config");
        com.swmansion.rnscreens.gamma.tabs.b bVar = (com.swmansion.rnscreens.gamma.tabs.b) this.f19209e.get();
        if (bVar != null) {
            bVar.b(this, config);
        }
    }

    public final void f() {
        if (getId() != -1) {
            setEventEmitter$react_native_screens_release(new com.swmansion.rnscreens.gamma.tabs.c(this.f19208d, getId()));
            return;
        }
        throw new IllegalStateException("[RNScreens] TabScreen must have its tag set when registering event emitters");
    }

    @Override // sn.a
    public Fragment getAssociatedFragment() {
        com.swmansion.rnscreens.gamma.tabs.b bVar = (com.swmansion.rnscreens.gamma.tabs.b) this.f19209e.get();
        if (bVar != null) {
            return bVar.a(this);
        }
        return null;
    }

    public final String getBadgeValue() {
        return (String) this.f19213q.getValue(this, B[1]);
    }

    public final String getDrawableIconResourceName() {
        return (String) this.f19218v.getValue(this, B[6]);
    }

    @NotNull
    public final com.swmansion.rnscreens.gamma.tabs.c getEventEmitter$react_native_screens_release() {
        com.swmansion.rnscreens.gamma.tabs.c cVar = this.f19210i;
        if (cVar != null) {
            return cVar;
        }
        Intrinsics.throwUninitializedPropertyAccessException("eventEmitter");
        return null;
    }

    public final Drawable getIcon() {
        return (Drawable) this.f19219w.getValue(this, B[7]);
    }

    @NotNull
    public final ThemedReactContext getReactContext() {
        return this.f19208d;
    }

    public final boolean getShouldUseRepeatedTabSelectionPopToRootSpecialEffect() {
        return this.f19221y;
    }

    public final boolean getShouldUseRepeatedTabSelectionScrollToTopSpecialEffect() {
        return this.f19220x;
    }

    public final String getTabBarItemAccessibilityLabel() {
        return (String) this.f19217u.getValue(this, B[5]);
    }

    public final Integer getTabBarItemBadgeBackgroundColor() {
        return (Integer) this.f19215s.getValue(this, B[3]);
    }

    public final Integer getTabBarItemBadgeTextColor() {
        return (Integer) this.f19214r.getValue(this, B[2]);
    }

    public final String getTabBarItemTestID() {
        return (String) this.f19216t.getValue(this, B[4]);
    }

    public final String getTabKey() {
        return this.f19211o;
    }

    public final String getTabTitle() {
        return (String) this.f19212p.getValue(this, B[0]);
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onAttachedToWindow() {
        co.e eVar = co.e.f8377a;
        int id2 = getId();
        eVar.a("TabScreen", "TabScreen [" + id2 + "] attached to window");
        super.onAttachedToWindow();
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
    }

    public final void setBadgeValue(String str) {
        this.f19213q.setValue(this, B[1], str);
    }

    public final void setDrawableIconResourceName(String str) {
        this.f19218v.setValue(this, B[6], str);
    }

    public final void setEventEmitter$react_native_screens_release(@NotNull com.swmansion.rnscreens.gamma.tabs.c cVar) {
        Intrinsics.checkNotNullParameter(cVar, "<set-?>");
        this.f19210i = cVar;
    }

    public final void setFocusedTab(boolean z10) {
        if (this.f19222z != z10) {
            this.f19222z = z10;
            e();
        }
    }

    public final void setIcon(Drawable drawable) {
        this.f19219w.setValue(this, B[7], drawable);
    }

    public final void setShouldUseRepeatedTabSelectionPopToRootSpecialEffect(boolean z10) {
        this.f19221y = z10;
    }

    public final void setShouldUseRepeatedTabSelectionScrollToTopSpecialEffect(boolean z10) {
        this.f19220x = z10;
    }

    public final void setTabBarItemAccessibilityLabel(String str) {
        this.f19217u.setValue(this, B[5], str);
    }

    public final void setTabBarItemBadgeBackgroundColor(Integer num) {
        this.f19215s.setValue(this, B[3], num);
    }

    public final void setTabBarItemBadgeTextColor(Integer num) {
        this.f19214r.setValue(this, B[2], num);
    }

    public final void setTabBarItemTestID(String str) {
        this.f19216t.setValue(this, B[4], str);
    }

    public final void setTabKey(String str) {
        if (str != null && StringsKt.k0(str)) {
            str = null;
        }
        this.f19211o = str;
    }

    public final void setTabScreenDelegate$react_native_screens_release(com.swmansion.rnscreens.gamma.tabs.b bVar) {
        this.f19209e = new WeakReference(bVar);
    }

    public final void setTabTitle(String str) {
        this.f19212p.setValue(this, B[0], str);
    }
}
