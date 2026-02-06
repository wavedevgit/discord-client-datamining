package fq;

import android.widget.TextView;
import com.google.android.material.textfield.TextInputLayout;
import com.withpersona.sdk2.inquiry.shared.ui.ButtonWithLoadingIndicator;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d0 {

    /* renamed from: a  reason: collision with root package name */
    private final TextInputLayout f23435a;

    /* renamed from: b  reason: collision with root package name */
    private final TextInputLayout f23436b;

    /* renamed from: c  reason: collision with root package name */
    private final iq.f f23437c;

    /* renamed from: d  reason: collision with root package name */
    private final iq.f f23438d;

    /* renamed from: e  reason: collision with root package name */
    private final ButtonWithLoadingIndicator f23439e;

    /* renamed from: f  reason: collision with root package name */
    private final TextView f23440f;

    public d0(TextInputLayout cardAccessNumber, TextInputLayout documentNumber, iq.f dateOfBirthBinding, iq.f expirationDateBinding, ButtonWithLoadingIndicator launchButton, TextView errorLabel) {
        Intrinsics.checkNotNullParameter(cardAccessNumber, "cardAccessNumber");
        Intrinsics.checkNotNullParameter(documentNumber, "documentNumber");
        Intrinsics.checkNotNullParameter(dateOfBirthBinding, "dateOfBirthBinding");
        Intrinsics.checkNotNullParameter(expirationDateBinding, "expirationDateBinding");
        Intrinsics.checkNotNullParameter(launchButton, "launchButton");
        Intrinsics.checkNotNullParameter(errorLabel, "errorLabel");
        this.f23435a = cardAccessNumber;
        this.f23436b = documentNumber;
        this.f23437c = dateOfBirthBinding;
        this.f23438d = expirationDateBinding;
        this.f23439e = launchButton;
        this.f23440f = errorLabel;
    }

    public final TextInputLayout a() {
        return this.f23435a;
    }

    public final iq.f b() {
        return this.f23437c;
    }

    public final TextInputLayout c() {
        return this.f23436b;
    }

    public final TextView d() {
        return this.f23440f;
    }

    public final iq.f e() {
        return this.f23438d;
    }

    public final ButtonWithLoadingIndicator f() {
        return this.f23439e;
    }
}
