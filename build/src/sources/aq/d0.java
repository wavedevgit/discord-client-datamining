package aq;

import android.widget.TextView;
import com.google.android.material.textfield.TextInputLayout;
import com.withpersona.sdk2.inquiry.shared.ui.ButtonWithLoadingIndicator;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d0 {

    /* renamed from: a  reason: collision with root package name */
    private final TextInputLayout f5853a;

    /* renamed from: b  reason: collision with root package name */
    private final TextInputLayout f5854b;

    /* renamed from: c  reason: collision with root package name */
    private final dq.f f5855c;

    /* renamed from: d  reason: collision with root package name */
    private final dq.f f5856d;

    /* renamed from: e  reason: collision with root package name */
    private final ButtonWithLoadingIndicator f5857e;

    /* renamed from: f  reason: collision with root package name */
    private final TextView f5858f;

    public d0(TextInputLayout cardAccessNumber, TextInputLayout documentNumber, dq.f dateOfBirthBinding, dq.f expirationDateBinding, ButtonWithLoadingIndicator launchButton, TextView errorLabel) {
        Intrinsics.checkNotNullParameter(cardAccessNumber, "cardAccessNumber");
        Intrinsics.checkNotNullParameter(documentNumber, "documentNumber");
        Intrinsics.checkNotNullParameter(dateOfBirthBinding, "dateOfBirthBinding");
        Intrinsics.checkNotNullParameter(expirationDateBinding, "expirationDateBinding");
        Intrinsics.checkNotNullParameter(launchButton, "launchButton");
        Intrinsics.checkNotNullParameter(errorLabel, "errorLabel");
        this.f5853a = cardAccessNumber;
        this.f5854b = documentNumber;
        this.f5855c = dateOfBirthBinding;
        this.f5856d = expirationDateBinding;
        this.f5857e = launchButton;
        this.f5858f = errorLabel;
    }

    public final TextInputLayout a() {
        return this.f5853a;
    }

    public final dq.f b() {
        return this.f5855c;
    }

    public final TextInputLayout c() {
        return this.f5854b;
    }

    public final TextView d() {
        return this.f5858f;
    }

    public final dq.f e() {
        return this.f5856d;
    }

    public final ButtonWithLoadingIndicator f() {
        return this.f5857e;
    }
}
