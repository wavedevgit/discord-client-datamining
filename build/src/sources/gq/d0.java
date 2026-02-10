package gq;

import android.widget.TextView;
import com.google.android.material.textfield.TextInputLayout;
import com.withpersona.sdk2.inquiry.shared.ui.ButtonWithLoadingIndicator;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d0 {

    /* renamed from: a  reason: collision with root package name */
    private final TextInputLayout f24520a;

    /* renamed from: b  reason: collision with root package name */
    private final TextInputLayout f24521b;

    /* renamed from: c  reason: collision with root package name */
    private final jq.f f24522c;

    /* renamed from: d  reason: collision with root package name */
    private final jq.f f24523d;

    /* renamed from: e  reason: collision with root package name */
    private final ButtonWithLoadingIndicator f24524e;

    /* renamed from: f  reason: collision with root package name */
    private final TextView f24525f;

    public d0(TextInputLayout cardAccessNumber, TextInputLayout documentNumber, jq.f dateOfBirthBinding, jq.f expirationDateBinding, ButtonWithLoadingIndicator launchButton, TextView errorLabel) {
        Intrinsics.checkNotNullParameter(cardAccessNumber, "cardAccessNumber");
        Intrinsics.checkNotNullParameter(documentNumber, "documentNumber");
        Intrinsics.checkNotNullParameter(dateOfBirthBinding, "dateOfBirthBinding");
        Intrinsics.checkNotNullParameter(expirationDateBinding, "expirationDateBinding");
        Intrinsics.checkNotNullParameter(launchButton, "launchButton");
        Intrinsics.checkNotNullParameter(errorLabel, "errorLabel");
        this.f24520a = cardAccessNumber;
        this.f24521b = documentNumber;
        this.f24522c = dateOfBirthBinding;
        this.f24523d = expirationDateBinding;
        this.f24524e = launchButton;
        this.f24525f = errorLabel;
    }

    public final TextInputLayout a() {
        return this.f24520a;
    }

    public final jq.f b() {
        return this.f24522c;
    }

    public final TextInputLayout c() {
        return this.f24521b;
    }

    public final TextView d() {
        return this.f24525f;
    }

    public final jq.f e() {
        return this.f24523d;
    }

    public final ButtonWithLoadingIndicator f() {
        return this.f24524e;
    }
}
