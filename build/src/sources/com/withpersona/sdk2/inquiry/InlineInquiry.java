package com.withpersona.sdk2.inquiry;

import android.os.Bundle;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00000\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\u0018\u00002\u00020\u0001BC\b\u0000\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\t\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u0007¢\u0006\u0004\b\u000b\u0010\fJ\n\u0010\u000e\u001a\u0004\u0018\u00010\u000fH\u0007J\u0010\u0010\u0010\u001a\u00020\u00112\u0006\u0010\u0012\u001a\u00020\u0013H\u0002R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\u0004\u001a\u0004\u0018\u00010\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u0012\u0010\u0006\u001a\u0004\u0018\u00010\u0007X\u0082\u0004¢\u0006\u0004\n\u0002\u0010\rR\u0012\u0010\b\u001a\u0004\u0018\u00010\u0007X\u0082\u0004¢\u0006\u0004\n\u0002\u0010\rR\u0012\u0010\t\u001a\u0004\u0018\u00010\u0007X\u0082\u0004¢\u0006\u0004\n\u0002\u0010\rR\u0012\u0010\n\u001a\u0004\u0018\u00010\u0007X\u0082\u0004¢\u0006\u0004\n\u0002\u0010\r¨\u0006\u0014"}, d2 = {"Lcom/withpersona/sdk2/inquiry/InlineInquiry;", "", "inquiry", "Lcom/withpersona/sdk2/inquiry/Inquiry;", "requestKey", "", "isNavBarEnabled", "", "controlNavigationBar", "controlStatusBar", "handleBackPress", "<init>", "(Lcom/withpersona/sdk2/inquiry/Inquiry;Ljava/lang/String;Ljava/lang/Boolean;Ljava/lang/Boolean;Ljava/lang/Boolean;Ljava/lang/Boolean;)V", "Ljava/lang/Boolean;", "createFragment", "Landroidx/fragment/app/Fragment;", "addArgumentsToBundle", "", "bundle", "Landroid/os/Bundle;", "inquiry-dynamic-feature_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nInlineInquiry.kt\nKotlin\n*S Kotlin\n*F\n+ 1 InlineInquiry.kt\ncom/withpersona/sdk2/inquiry/InlineInquiry\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,48:1\n1#2:49\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class InlineInquiry {
    private final Boolean controlNavigationBar;
    private final Boolean controlStatusBar;
    private final Boolean handleBackPress;
    @NotNull
    private final Inquiry inquiry;
    private final Boolean isNavBarEnabled;
    private final String requestKey;

    public InlineInquiry(@NotNull Inquiry inquiry, String str, Boolean bool, Boolean bool2, Boolean bool3, Boolean bool4) {
        Intrinsics.checkNotNullParameter(inquiry, "inquiry");
        this.inquiry = inquiry;
        this.requestKey = str;
        this.isNavBarEnabled = bool;
        this.controlNavigationBar = bool2;
        this.controlStatusBar = bool3;
        this.handleBackPress = bool4;
    }

    private final void addArgumentsToBundle(Bundle bundle) {
        String str = this.requestKey;
        if (str != null) {
            bundle.putString("REQUEST_KEY", str);
        }
        Boolean bool = this.isNavBarEnabled;
        if (bool != null) {
            bundle.putBoolean("IS_NAV_BAR_ENABLED", bool.booleanValue());
        }
        Boolean bool2 = this.controlNavigationBar;
        if (bool2 != null) {
            bundle.putBoolean("CONTROL_NAVIGATION_BAR", bool2.booleanValue());
        }
        Boolean bool3 = this.controlStatusBar;
        if (bool3 != null) {
            bundle.putBoolean("CONTROL_STATUS_BAR", bool3.booleanValue());
        }
        Boolean bool4 = this.handleBackPress;
        if (bool4 != null) {
            bundle.putBoolean("HANDLE_BACK_PRESS", bool4.booleanValue());
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:14:? A[RETURN, SYNTHETIC] */
    /* JADX WARN: Removed duplicated region for block: B:9:0x0017  */
    @com.withpersona.sdk2.inquiry.ExperimentalInlineApi
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final androidx.fragment.app.Fragment createFragment() {
        /*
            r3 = this;
            r0 = 0
            java.lang.Class<com.withpersona.sdk2.inquiry.internal.j> r1 = com.withpersona.sdk2.inquiry.internal.j.class
            int r2 = com.withpersona.sdk2.inquiry.internal.j.f18924r     // Catch: java.lang.ClassNotFoundException -> L14
            java.lang.reflect.Constructor r1 = r1.getDeclaredConstructor(r0)     // Catch: java.lang.ClassNotFoundException -> L14
            java.lang.Object r1 = r1.newInstance(r0)     // Catch: java.lang.ClassNotFoundException -> L14
            boolean r2 = r1 instanceof androidx.fragment.app.Fragment     // Catch: java.lang.ClassNotFoundException -> L14
            if (r2 == 0) goto L14
            androidx.fragment.app.Fragment r1 = (androidx.fragment.app.Fragment) r1     // Catch: java.lang.ClassNotFoundException -> L14
            goto L15
        L14:
            r1 = r0
        L15:
            if (r1 == 0) goto L28
            android.os.Bundle r0 = new android.os.Bundle
            r0.<init>()
            com.withpersona.sdk2.inquiry.Inquiry r2 = r3.inquiry
            r2.addArgumentsToBundle$inquiry_dynamic_feature_release(r0)
            r3.addArgumentsToBundle(r0)
            r1.setArguments(r0)
            r0 = r1
        L28:
            return r0
        */
        throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.InlineInquiry.createFragment():androidx.fragment.app.Fragment");
    }
}
