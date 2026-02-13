package pq;

import android.widget.TextView;
import com.google.android.material.textfield.TextInputLayout;
import com.withpersona.sdk2.inquiry.shared.ui.ButtonWithLoadingIndicator;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d0 {

    /* renamed from: a  reason: collision with root package name */
    private final TextInputLayout f43480a;

    /* renamed from: b  reason: collision with root package name */
    private final TextInputLayout f43481b;

    /* renamed from: c  reason: collision with root package name */
    private final sq.f f43482c;

    /* renamed from: d  reason: collision with root package name */
    private final sq.f f43483d;

    /* renamed from: e  reason: collision with root package name */
    private final ButtonWithLoadingIndicator f43484e;

    /* renamed from: f  reason: collision with root package name */
    private final TextView f43485f;

    public d0(TextInputLayout cardAccessNumber, TextInputLayout documentNumber, sq.f dateOfBirthBinding, sq.f expirationDateBinding, ButtonWithLoadingIndicator launchButton, TextView errorLabel) {
        Intrinsics.checkNotNullParameter(cardAccessNumber, "cardAccessNumber");
        Intrinsics.checkNotNullParameter(documentNumber, "documentNumber");
        Intrinsics.checkNotNullParameter(dateOfBirthBinding, "dateOfBirthBinding");
        Intrinsics.checkNotNullParameter(expirationDateBinding, "expirationDateBinding");
        Intrinsics.checkNotNullParameter(launchButton, "launchButton");
        Intrinsics.checkNotNullParameter(errorLabel, "errorLabel");
        this.f43480a = cardAccessNumber;
        this.f43481b = documentNumber;
        this.f43482c = dateOfBirthBinding;
        this.f43483d = expirationDateBinding;
        this.f43484e = launchButton;
        this.f43485f = errorLabel;
    }

    public final TextInputLayout a() {
        return this.f43480a;
    }

    public final sq.f b() {
        return this.f43482c;
    }

    public final TextInputLayout c() {
        return this.f43481b;
    }

    public final TextView d() {
        return this.f43485f;
    }

    public final sq.f e() {
        return this.f43483d;
    }

    public final ButtonWithLoadingIndicator f() {
        return this.f43484e;
    }
}
