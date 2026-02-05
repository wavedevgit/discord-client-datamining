package dq;

import android.widget.TextView;
import com.google.android.material.textfield.TextInputLayout;
import com.withpersona.sdk2.inquiry.shared.ui.ButtonWithLoadingIndicator;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d0 {

    /* renamed from: a  reason: collision with root package name */
    private final TextInputLayout f20958a;

    /* renamed from: b  reason: collision with root package name */
    private final TextInputLayout f20959b;

    /* renamed from: c  reason: collision with root package name */
    private final gq.f f20960c;

    /* renamed from: d  reason: collision with root package name */
    private final gq.f f20961d;

    /* renamed from: e  reason: collision with root package name */
    private final ButtonWithLoadingIndicator f20962e;

    /* renamed from: f  reason: collision with root package name */
    private final TextView f20963f;

    public d0(TextInputLayout cardAccessNumber, TextInputLayout documentNumber, gq.f dateOfBirthBinding, gq.f expirationDateBinding, ButtonWithLoadingIndicator launchButton, TextView errorLabel) {
        Intrinsics.checkNotNullParameter(cardAccessNumber, "cardAccessNumber");
        Intrinsics.checkNotNullParameter(documentNumber, "documentNumber");
        Intrinsics.checkNotNullParameter(dateOfBirthBinding, "dateOfBirthBinding");
        Intrinsics.checkNotNullParameter(expirationDateBinding, "expirationDateBinding");
        Intrinsics.checkNotNullParameter(launchButton, "launchButton");
        Intrinsics.checkNotNullParameter(errorLabel, "errorLabel");
        this.f20958a = cardAccessNumber;
        this.f20959b = documentNumber;
        this.f20960c = dateOfBirthBinding;
        this.f20961d = expirationDateBinding;
        this.f20962e = launchButton;
        this.f20963f = errorLabel;
    }

    public final TextInputLayout a() {
        return this.f20958a;
    }

    public final gq.f b() {
        return this.f20960c;
    }

    public final TextInputLayout c() {
        return this.f20959b;
    }

    public final TextView d() {
        return this.f20963f;
    }

    public final gq.f e() {
        return this.f20961d;
    }

    public final ButtonWithLoadingIndicator f() {
        return this.f20962e;
    }
}
