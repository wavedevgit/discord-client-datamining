package pq;

import android.widget.TextView;
import com.google.android.material.textfield.TextInputLayout;
import com.withpersona.sdk2.inquiry.shared.ui.ButtonWithLoadingIndicator;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d0 {

    /* renamed from: a  reason: collision with root package name */
    private final TextInputLayout f42911a;

    /* renamed from: b  reason: collision with root package name */
    private final TextInputLayout f42912b;

    /* renamed from: c  reason: collision with root package name */
    private final sq.f f42913c;

    /* renamed from: d  reason: collision with root package name */
    private final sq.f f42914d;

    /* renamed from: e  reason: collision with root package name */
    private final ButtonWithLoadingIndicator f42915e;

    /* renamed from: f  reason: collision with root package name */
    private final TextView f42916f;

    public d0(TextInputLayout cardAccessNumber, TextInputLayout documentNumber, sq.f dateOfBirthBinding, sq.f expirationDateBinding, ButtonWithLoadingIndicator launchButton, TextView errorLabel) {
        Intrinsics.checkNotNullParameter(cardAccessNumber, "cardAccessNumber");
        Intrinsics.checkNotNullParameter(documentNumber, "documentNumber");
        Intrinsics.checkNotNullParameter(dateOfBirthBinding, "dateOfBirthBinding");
        Intrinsics.checkNotNullParameter(expirationDateBinding, "expirationDateBinding");
        Intrinsics.checkNotNullParameter(launchButton, "launchButton");
        Intrinsics.checkNotNullParameter(errorLabel, "errorLabel");
        this.f42911a = cardAccessNumber;
        this.f42912b = documentNumber;
        this.f42913c = dateOfBirthBinding;
        this.f42914d = expirationDateBinding;
        this.f42915e = launchButton;
        this.f42916f = errorLabel;
    }

    public final TextInputLayout a() {
        return this.f42911a;
    }

    public final sq.f b() {
        return this.f42913c;
    }

    public final TextInputLayout c() {
        return this.f42912b;
    }

    public final TextView d() {
        return this.f42916f;
    }

    public final sq.f e() {
        return this.f42914d;
    }

    public final ButtonWithLoadingIndicator f() {
        return this.f42915e;
    }
}
