package hf;

import android.content.Context;
import android.content.res.Resources;
import com.withpersona.sdk2.inquiry.network.dto.InquiryField;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class t {

    /* renamed from: a  reason: collision with root package name */
    private final Resources f26105a;

    /* renamed from: b  reason: collision with root package name */
    private final String f26106b;

    public t(Context context) {
        q.l(context);
        Resources resources = context.getResources();
        this.f26105a = resources;
        this.f26106b = resources.getResourcePackageName(com.google.android.gms.common.m.f13927a);
    }

    public String a(String str) {
        String str2 = this.f26106b;
        Resources resources = this.f26105a;
        int identifier = resources.getIdentifier(str, InquiryField.StringField.TYPE, str2);
        if (identifier == 0) {
            return null;
        }
        return resources.getString(identifier);
    }
}
