package xp;

import android.widget.TextView;
import com.google.android.material.textfield.TextInputLayout;
import com.withpersona.sdk2.inquiry.shared.ui.ButtonWithLoadingIndicator;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d0 {

    /* renamed from: a  reason: collision with root package name */
    private final TextInputLayout f53541a;

    /* renamed from: b  reason: collision with root package name */
    private final TextInputLayout f53542b;

    /* renamed from: c  reason: collision with root package name */
    private final aq.f f53543c;

    /* renamed from: d  reason: collision with root package name */
    private final aq.f f53544d;

    /* renamed from: e  reason: collision with root package name */
    private final ButtonWithLoadingIndicator f53545e;

    /* renamed from: f  reason: collision with root package name */
    private final TextView f53546f;

    public d0(TextInputLayout cardAccessNumber, TextInputLayout documentNumber, aq.f dateOfBirthBinding, aq.f expirationDateBinding, ButtonWithLoadingIndicator launchButton, TextView errorLabel) {
        Intrinsics.checkNotNullParameter(cardAccessNumber, "cardAccessNumber");
        Intrinsics.checkNotNullParameter(documentNumber, "documentNumber");
        Intrinsics.checkNotNullParameter(dateOfBirthBinding, "dateOfBirthBinding");
        Intrinsics.checkNotNullParameter(expirationDateBinding, "expirationDateBinding");
        Intrinsics.checkNotNullParameter(launchButton, "launchButton");
        Intrinsics.checkNotNullParameter(errorLabel, "errorLabel");
        this.f53541a = cardAccessNumber;
        this.f53542b = documentNumber;
        this.f53543c = dateOfBirthBinding;
        this.f53544d = expirationDateBinding;
        this.f53545e = launchButton;
        this.f53546f = errorLabel;
    }

    public final TextInputLayout a() {
        return this.f53541a;
    }

    public final aq.f b() {
        return this.f53543c;
    }

    public final TextInputLayout c() {
        return this.f53542b;
    }

    public final TextView d() {
        return this.f53546f;
    }

    public final aq.f e() {
        return this.f53544d;
    }

    public final ButtonWithLoadingIndicator f() {
        return this.f53545e;
    }
}
