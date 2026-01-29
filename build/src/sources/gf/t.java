package gf;

import android.content.Context;
import android.content.res.Resources;
import com.withpersona.sdk2.inquiry.network.dto.InquiryField;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class t {

    /* renamed from: a  reason: collision with root package name */
    private final Resources f26878a;

    /* renamed from: b  reason: collision with root package name */
    private final String f26879b;

    public t(Context context) {
        q.l(context);
        Resources resources = context.getResources();
        this.f26878a = resources;
        this.f26879b = resources.getResourcePackageName(com.google.android.gms.common.l.f14828a);
    }

    public String a(String str) {
        int identifier = this.f26878a.getIdentifier(str, InquiryField.StringField.TYPE, this.f26879b);
        if (identifier == 0) {
            return null;
        }
        return this.f26878a.getString(identifier);
    }
}
