package com.withpersona.sdk2.inquiry;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import androidx.activity.result.contract.ActivityResultContract;
import com.facebook.react.uimanager.ViewProps;
import com.withpersona.sdk2.inquiry.InquiryField;
import com.withpersona.sdk2.inquiry.InquiryResponse;
import com.withpersona.sdk2.inquiry.network.dto.InquiryField;
import ho.a;
import java.text.SimpleDateFormat;
import java.util.LinkedHashMap;
import java.util.Locale;
import java.util.Map;
import kotlin.Metadata;
import kotlin.collections.o0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import oq.d;
import org.jetbrains.annotations.NotNull;
import qr.c;
import qr.p;
import uo.e2;
import uo.s;
import uo.z;
import w1.b;
@Metadata(d1 = {"\u0000h\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\u0018\u0000 02\u00020\u0001:\u0002/0BÇ\u0001\b\u0000\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\b\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\t\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u000b\u0012\b\u0010\f\u001a\u0004\u0018\u00010\r\u0012\b\u0010\u000e\u001a\u0004\u0018\u00010\u000f\u0012\b\u0010\u0010\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0011\u001a\u0004\u0018\u00010\u0012\u0012\b\u0010\u0013\u001a\u0004\u0018\u00010\u0012\u0012\b\u0010\u0014\u001a\u0004\u0018\u00010\u0015\u0012\b\u0010\u0016\u001a\u0004\u0018\u00010\u0012\u0012\b\u0010\u0017\u001a\u0004\u0018\u00010\u0018\u0012\b\u0010\u0019\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u001a\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u001b\u001a\u0004\u0018\u00010\u0012¢\u0006\u0004\b\u001c\u0010\u001dJ\u0018\u0010 \u001a\u00020!2\u0006\u0010\"\u001a\u00020#2\u0006\u0010$\u001a\u00020\rH\u0007J\b\u0010%\u001a\u00020&H\u0007J\u0010\u0010'\u001a\u00020(2\u0006\u0010)\u001a\u00020*H\u0002J\u0015\u0010+\u001a\u00020!2\u0006\u0010,\u001a\u00020-H\u0000¢\u0006\u0002\b.R\u0010\u0010\u0002\u001a\u0004\u0018\u00010\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\u0004\u001a\u0004\u0018\u00010\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\u0005\u001a\u0004\u0018\u00010\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\u0006\u001a\u0004\u0018\u00010\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\u0007\u001a\u0004\u0018\u00010\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\b\u001a\u0004\u0018\u00010\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\t\u001a\u0004\u0018\u00010\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\n\u001a\u0004\u0018\u00010\u000bX\u0082\u0004¢\u0006\u0002\n\u0000R\u0012\u0010\f\u001a\u0004\u0018\u00010\rX\u0082\u0004¢\u0006\u0004\n\u0002\u0010\u001eR\u0010\u0010\u000e\u001a\u0004\u0018\u00010\u000fX\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\u0010\u001a\u0004\u0018\u00010\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u0012\u0010\u0011\u001a\u0004\u0018\u00010\u0012X\u0082\u0004¢\u0006\u0004\n\u0002\u0010\u001fR\u0012\u0010\u0013\u001a\u0004\u0018\u00010\u0012X\u0082\u0004¢\u0006\u0004\n\u0002\u0010\u001fR\u0010\u0010\u0014\u001a\u0004\u0018\u00010\u0015X\u0082\u0004¢\u0006\u0002\n\u0000R\u0012\u0010\u0016\u001a\u0004\u0018\u00010\u0012X\u0082\u0004¢\u0006\u0004\n\u0002\u0010\u001fR\u0010\u0010\u0017\u001a\u0004\u0018\u00010\u0018X\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\u0019\u001a\u0004\u0018\u00010\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\u001a\u001a\u0004\u0018\u00010\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u0012\u0010\u001b\u001a\u0004\u0018\u00010\u0012X\u0082\u0004¢\u0006\u0004\n\u0002\u0010\u001f¨\u00061"}, d2 = {"Lcom/withpersona/sdk2/inquiry/Inquiry;", "", "templateId", "", "templateVersion", "inquiryId", "sessionToken", "oneTimeLinkCode", "referenceId", "accountId", "fields", "Lcom/withpersona/sdk2/inquiry/Fields;", "theme", "", "environment", "Lcom/withpersona/sdk2/inquiry/Environment;", "environmentId", "enableErrorLogging", "", "returnCollectedData", "fallbackMode", "Lcom/withpersona/sdk2/inquiry/FallbackMode;", "useServerStyles", "staticInquiryTemplate", "Lcom/withpersona/sdk2/inquiry/StaticInquiryTemplate;", "themeSetId", "locale", "consumeExceptions", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/Fields;Ljava/lang/Integer;Lcom/withpersona/sdk2/inquiry/Environment;Ljava/lang/String;Ljava/lang/Boolean;Ljava/lang/Boolean;Lcom/withpersona/sdk2/inquiry/FallbackMode;Ljava/lang/Boolean;Lcom/withpersona/sdk2/inquiry/StaticInquiryTemplate;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;)V", "Ljava/lang/Integer;", "Ljava/lang/Boolean;", ViewProps.START, "", "activity", "Landroid/app/Activity;", "requestCode", "buildInlineInquiry", "Lcom/withpersona/sdk2/inquiry/InlineInquiryBuilder;", "toInquiryActivityIntent", "Landroid/content/Intent;", "context", "Landroid/content/Context;", "addArgumentsToBundle", "bundle", "Landroid/os/Bundle;", "addArgumentsToBundle$inquiry_dynamic_feature_release", "Contract", "Companion", "inquiry-dynamic-feature_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nInquiry.kt\nKotlin\n*S Kotlin\n*F\n+ 1 Inquiry.kt\ncom/withpersona/sdk2/inquiry/Inquiry\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,401:1\n1#2:402\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class Inquiry {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final String accountId;
    private final Boolean consumeExceptions;
    private final Boolean enableErrorLogging;
    private final Environment environment;
    private final String environmentId;
    private final FallbackMode fallbackMode;
    private final Fields fields;
    private final String inquiryId;
    private final String locale;
    private final String oneTimeLinkCode;
    private final String referenceId;
    private final Boolean returnCollectedData;
    private final String sessionToken;
    private final StaticInquiryTemplate staticInquiryTemplate;
    private final String templateId;
    private final String templateVersion;
    private final Integer theme;
    private final String themeSetId;
    private final Boolean useServerStyles;

    @Metadata(d1 = {"\u0000R\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u0002\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u001f\u0010\b\u001a\u00020\u0007*\u0004\u0018\u00010\u00042\b\u0010\u0006\u001a\u0004\u0018\u00010\u0005H\u0002¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\r\u001a\u00020\f2\u0006\u0010\u000b\u001a\u00020\nH\u0007¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0010\u001a\u00020\f2\u0006\u0010\u000f\u001a\u00020\nH\u0007¢\u0006\u0004\b\u0010\u0010\u000eJ\u0017\u0010\u0013\u001a\u00020\f2\u0006\u0010\u0012\u001a\u00020\u0011H\u0007¢\u0006\u0004\b\u0013\u0010\u0014J\u0017\u0010\u0017\u001a\u00020\u00162\u0006\u0010\u0015\u001a\u00020\nH\u0007¢\u0006\u0004\b\u0017\u0010\u0018J\u0017\u0010\u001a\u001a\u00020\u00162\u0006\u0010\u0019\u001a\u00020\nH\u0007¢\u0006\u0004\b\u001a\u0010\u0018J%\u0010\u001e\u001a\u00020\u001d2\b\u0010\u001c\u001a\u0004\u0018\u00010\u001b2\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0005H\u0007¢\u0006\u0004\b\u001e\u0010\u001fJ#\u0010!\u001a\u00020\u001d2\b\u0010 \u001a\u0004\u0018\u00010\u00042\b\u0010\u0006\u001a\u0004\u0018\u00010\u0005H\u0007¢\u0006\u0004\b!\u0010\"J\r\u0010$\u001a\u00020#¢\u0006\u0004\b$\u0010\u0003J\r\u0010%\u001a\u00020#¢\u0006\u0004\b%\u0010\u0003¨\u0006&"}, d2 = {"Lcom/withpersona/sdk2/inquiry/Inquiry$Companion;", "", "<init>", "()V", "Landroid/os/Bundle;", "Landroid/content/Context;", "context", "Luo/z;", "getStatus", "(Landroid/os/Bundle;Landroid/content/Context;)Luo/z;", "", "templateId", "Lcom/withpersona/sdk2/inquiry/InquiryTemplateBuilder;", "fromTemplate", "(Ljava/lang/String;)Lcom/withpersona/sdk2/inquiry/InquiryTemplateBuilder;", "templateVersion", "fromTemplateVersion", "Lcom/withpersona/sdk2/inquiry/StaticInquiryTemplate;", "staticInquiryTemplate", "fromStaticTemplate", "(Lcom/withpersona/sdk2/inquiry/StaticInquiryTemplate;)Lcom/withpersona/sdk2/inquiry/InquiryTemplateBuilder;", "inquiryId", "Lcom/withpersona/sdk2/inquiry/InquiryBuilder;", "fromInquiry", "(Ljava/lang/String;)Lcom/withpersona/sdk2/inquiry/InquiryBuilder;", "oneTimeLinkCode", "fromOneTimeLinkCode", "Landroid/content/Intent;", "intent", "Lcom/withpersona/sdk2/inquiry/InquiryResponse;", "onActivityResult", "(Landroid/content/Intent;Landroid/content/Context;)Lcom/withpersona/sdk2/inquiry/InquiryResponse;", "bundle", "extractInquiryResponseFromBundle", "(Landroid/os/Bundle;Landroid/content/Context;)Lcom/withpersona/sdk2/inquiry/InquiryResponse;", "", "prefetchModels", "cancelRunningInquiries", "inquiry-dynamic-feature_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    @SourceDebugExtension({"SMAP\nInquiry.kt\nKotlin\n*S Kotlin\n*F\n+ 1 Inquiry.kt\ncom/withpersona/sdk2/inquiry/Inquiry$Companion\n+ 2 Maps.kt\nkotlin/collections/MapsKt__MapsKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,401:1\n462#2:402\n412#2:403\n1246#3,4:404\n*S KotlinDebug\n*F\n+ 1 Inquiry.kt\ncom/withpersona/sdk2/inquiry/Inquiry$Companion\n*L\n303#1:402\n303#1:403\n303#1:404,4\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Companion {

        @Metadata(k = 3, mv = {2, 0, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public /* synthetic */ class WhenMappings {
            public static final /* synthetic */ int[] $EnumSwitchMapping$0;

            static {
                int[] iArr = new int[z.values().length];
                try {
                    iArr[z.f52124d.ordinal()] = 1;
                } catch (NoSuchFieldError unused) {
                }
                try {
                    iArr[z.f52125e.ordinal()] = 2;
                } catch (NoSuchFieldError unused2) {
                }
                try {
                    iArr[z.f52126i.ordinal()] = 3;
                } catch (NoSuchFieldError unused3) {
                }
                $EnumSwitchMapping$0 = iArr;
            }
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private final z getStatus(Bundle bundle, Context context) {
            String string;
            z zVar = null;
            if (bundle != null && (string = bundle.getString("PERSONA_ACTIVITY_RESULT")) != null) {
                try {
                    zVar = z.valueOf(string);
                } catch (Exception unused) {
                }
            }
            if (zVar != null) {
                return zVar;
            }
            if (context == null) {
                return z.f52125e;
            }
            if (new a(context).f()) {
                return z.f52126i;
            }
            return z.f52125e;
        }

        public static /* synthetic */ InquiryResponse onActivityResult$default(Companion companion, Intent intent, Context context, int i10, Object obj) {
            if ((i10 & 2) != 0) {
                context = null;
            }
            return companion.onActivityResult(intent, context);
        }

        public final void cancelRunningInquiries() {
            InquiryActivityBroadcastManager.INSTANCE.cancelRunningInquiries();
        }

        /* JADX WARN: Multi-variable type inference failed */
        /* JADX WARN: Type inference failed for: r1v4 */
        /* JADX WARN: Type inference failed for: r1v5 */
        /* JADX WARN: Type inference failed for: r1v6, types: [oq.d] */
        /* JADX WARN: Type inference failed for: r1v7 */
        @NotNull
        public final InquiryResponse extractInquiryResponseFromBundle(Bundle bundle, Context context) {
            String str;
            s sVar;
            String str2;
            oq.a aVar;
            InquiryField unknownField;
            InquiryField dateField;
            String str3;
            String str4;
            d dVar;
            d dVar2;
            z status = getStatus(bundle, context);
            String str5 = 0;
            if (bundle != null) {
                str = bundle.getString("INQUIRY_ID_KEY");
            } else {
                str = null;
            }
            int i10 = WhenMappings.$EnumSwitchMapping$0[status.ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        if (bundle != null) {
                            str3 = bundle.getString("ERROR_DEBUG_MESSAGE_KEY");
                        } else {
                            str3 = null;
                        }
                        if (context != null) {
                            str4 = new a(context).e();
                        } else {
                            str4 = null;
                        }
                        if (bundle != null) {
                            try {
                                dVar = (d) bundle.getParcelable("ERROR_CODE_KEY");
                            } catch (Exception unused) {
                                dVar2 = d.f43386s;
                            }
                        } else {
                            dVar = null;
                        }
                        if (dVar != null) {
                            str5 = dVar;
                        }
                        if (str5 == 0) {
                            str5 = d.f43386s;
                        }
                        dVar2 = str5;
                        if (str3 == null) {
                            str3 = "An otherwise unexpected error occurred.";
                        }
                        return new InquiryResponse.Error(str3, dVar2, str4);
                    }
                    throw new p();
                }
                if (bundle != null) {
                    str5 = bundle.getString("SESSION_TOKEN_KEY");
                }
                return new InquiryResponse.Cancel(str, str5);
            }
            if (bundle == null || (sVar = (s) b.a(bundle, "FIELDS_MAP_KEY", s.class)) == null) {
                sVar = new s(o0.i());
            }
            if (bundle != null) {
                str2 = bundle.getString("INQUIRY_STATUS_KEY");
            } else {
                str2 = null;
            }
            if (bundle != null) {
                aVar = (oq.a) b.a(bundle, "COLLECTED_DATA", oq.a.class);
            } else {
                aVar = null;
            }
            Intrinsics.checkNotNull(str);
            Intrinsics.checkNotNull(str2);
            Map a10 = sVar.a();
            LinkedHashMap linkedHashMap = new LinkedHashMap(o0.e(a10.size()));
            for (Map.Entry entry : a10.entrySet()) {
                Object key = entry.getKey();
                com.withpersona.sdk2.inquiry.network.dto.InquiryField inquiryField = (com.withpersona.sdk2.inquiry.network.dto.InquiryField) entry.getValue();
                if (inquiryField instanceof InquiryField.StringField) {
                    unknownField = new InquiryField.StringField(((InquiryField.StringField) inquiryField).getValue());
                } else if (inquiryField instanceof InquiryField.IntegerField) {
                    unknownField = new InquiryField.IntegerField(((InquiryField.IntegerField) inquiryField).getValue());
                } else if (inquiryField instanceof InquiryField.BooleanField) {
                    unknownField = new InquiryField.BooleanField(((InquiryField.BooleanField) inquiryField).getValue());
                } else if (inquiryField instanceof InquiryField.FloatField) {
                    unknownField = new InquiryField.FloatField(((InquiryField.FloatField) inquiryField).getValue());
                } else if (inquiryField instanceof InquiryField.DateField) {
                    String value = ((InquiryField.DateField) inquiryField).getValue();
                    if (value != null) {
                        dateField = new InquiryField.DateField(new SimpleDateFormat("yyyy-MM-dd", Locale.US).parse(value));
                        unknownField = dateField;
                    } else {
                        unknownField = new InquiryField.DateField(null);
                    }
                } else if (inquiryField instanceof InquiryField.DatetimeField) {
                    String value2 = ((InquiryField.DatetimeField) inquiryField).getValue();
                    if (value2 != null) {
                        dateField = new InquiryField.DateField(new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", Locale.US).parse(value2));
                        unknownField = dateField;
                    } else {
                        unknownField = new InquiryField.DatetimeField(null);
                    }
                } else if (inquiryField instanceof InquiryField.ChoicesField) {
                    unknownField = new InquiryField.ChoicesField(((InquiryField.ChoicesField) inquiryField).getValue());
                } else if (inquiryField instanceof InquiryField.MultiChoicesField) {
                    unknownField = new InquiryField.MultiChoicesField(((InquiryField.MultiChoicesField) inquiryField).getValue());
                } else if (inquiryField instanceof InquiryField.Unknown) {
                    unknownField = new InquiryField.UnknownField(((InquiryField.Unknown) inquiryField).getType());
                } else {
                    throw new p();
                }
                linkedHashMap.put(key, unknownField);
            }
            return new InquiryResponse.Complete(str, str2, linkedHashMap, aVar);
        }

        @NotNull
        public final InquiryBuilder fromInquiry(@NotNull String inquiryId) {
            Intrinsics.checkNotNullParameter(inquiryId, "inquiryId");
            return InquiryBuilder.Companion.fromInquiryId$inquiry_dynamic_feature_release(inquiryId);
        }

        @NotNull
        public final InquiryBuilder fromOneTimeLinkCode(@NotNull String oneTimeLinkCode) {
            Intrinsics.checkNotNullParameter(oneTimeLinkCode, "oneTimeLinkCode");
            return InquiryBuilder.Companion.fromOneTimeLinkCode$inquiry_dynamic_feature_release(oneTimeLinkCode);
        }

        @ExperimentalInquiryFlow
        @NotNull
        public final InquiryTemplateBuilder fromStaticTemplate(@NotNull StaticInquiryTemplate staticInquiryTemplate) {
            Intrinsics.checkNotNullParameter(staticInquiryTemplate, "staticInquiryTemplate");
            return new InquiryTemplateBuilder(null, null, staticInquiryTemplate, 3, null);
        }

        @NotNull
        public final InquiryTemplateBuilder fromTemplate(@NotNull String templateId) {
            Intrinsics.checkNotNullParameter(templateId, "templateId");
            return new InquiryTemplateBuilder(templateId, null, null, 6, null);
        }

        @NotNull
        public final InquiryTemplateBuilder fromTemplateVersion(@NotNull String templateVersion) {
            Intrinsics.checkNotNullParameter(templateVersion, "templateVersion");
            return new InquiryTemplateBuilder(null, templateVersion, null, 5, null);
        }

        @NotNull
        @c
        public final InquiryResponse onActivityResult(Intent intent) {
            return onActivityResult$default(this, intent, null, 2, null);
        }

        public final void prefetchModels() {
            e2.f51952a.a();
        }

        private Companion() {
        }

        @NotNull
        @c
        public final InquiryResponse onActivityResult(Intent intent, Context context) {
            return extractInquiryResponseFromBundle(intent != null ? intent.getExtras() : null, context);
        }
    }

    @Metadata(d1 = {"\u0000,\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0002\b\u0016\u0018\u00002\u000e\u0012\u0004\u0012\u00020\u0002\u0012\u0004\u0012\u00020\u00030\u0001B\t\b\u0007¢\u0006\u0004\b\u0004\u0010\u0005B\u0011\b\u0016\u0012\u0006\u0010\u0006\u001a\u00020\u0007¢\u0006\u0004\b\u0004\u0010\bJ\u0018\u0010\t\u001a\u00020\n2\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\u000b\u001a\u00020\u0002H\u0016J\u001a\u0010\f\u001a\u00020\u00032\u0006\u0010\r\u001a\u00020\u000e2\b\u0010\u000f\u001a\u0004\u0018\u00010\nH\u0016R\u0010\u0010\u0006\u001a\u0004\u0018\u00010\u0007X\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\u0010"}, d2 = {"Lcom/withpersona/sdk2/inquiry/Inquiry$Contract;", "Landroidx/activity/result/contract/ActivityResultContract;", "Lcom/withpersona/sdk2/inquiry/Inquiry;", "Lcom/withpersona/sdk2/inquiry/InquiryResponse;", "<init>", "()V", "context", "Landroid/content/Context;", "(Landroid/content/Context;)V", "createIntent", "Landroid/content/Intent;", "input", "parseResult", "resultCode", "", "intent", "inquiry-dynamic-feature_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class Contract extends ActivityResultContract {
        private Context context;

        @c
        public Contract() {
        }

        /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
        public Contract(@NotNull Context context) {
            this();
            Intrinsics.checkNotNullParameter(context, "context");
            this.context = context;
        }

        @Override // androidx.activity.result.contract.ActivityResultContract
        @NotNull
        public Intent createIntent(@NotNull Context context, @NotNull Inquiry input) {
            Intrinsics.checkNotNullParameter(context, "context");
            Intrinsics.checkNotNullParameter(input, "input");
            return input.toInquiryActivityIntent(context);
        }

        @Override // androidx.activity.result.contract.ActivityResultContract
        @NotNull
        public InquiryResponse parseResult(int i10, Intent intent) {
            return Inquiry.Companion.onActivityResult(intent, this.context);
        }
    }

    public Inquiry(String str, String str2, String str3, String str4, String str5, String str6, String str7, Fields fields, Integer num, Environment environment, String str8, Boolean bool, Boolean bool2, FallbackMode fallbackMode, Boolean bool3, StaticInquiryTemplate staticInquiryTemplate, String str9, String str10, Boolean bool4) {
        this.templateId = str;
        this.templateVersion = str2;
        this.inquiryId = str3;
        this.sessionToken = str4;
        this.oneTimeLinkCode = str5;
        this.referenceId = str6;
        this.accountId = str7;
        this.fields = fields;
        this.theme = num;
        this.environment = environment;
        this.environmentId = str8;
        this.enableErrorLogging = bool;
        this.returnCollectedData = bool2;
        this.fallbackMode = fallbackMode;
        this.useServerStyles = bool3;
        this.staticInquiryTemplate = staticInquiryTemplate;
        this.themeSetId = str9;
        this.locale = str10;
        this.consumeExceptions = bool4;
    }

    @NotNull
    public static final InquiryResponse extractInquiryResponseFromBundle(Bundle bundle, Context context) {
        return Companion.extractInquiryResponseFromBundle(bundle, context);
    }

    @NotNull
    public static final InquiryBuilder fromInquiry(@NotNull String str) {
        return Companion.fromInquiry(str);
    }

    @NotNull
    public static final InquiryBuilder fromOneTimeLinkCode(@NotNull String str) {
        return Companion.fromOneTimeLinkCode(str);
    }

    @ExperimentalInquiryFlow
    @NotNull
    public static final InquiryTemplateBuilder fromStaticTemplate(@NotNull StaticInquiryTemplate staticInquiryTemplate) {
        return Companion.fromStaticTemplate(staticInquiryTemplate);
    }

    @NotNull
    public static final InquiryTemplateBuilder fromTemplate(@NotNull String str) {
        return Companion.fromTemplate(str);
    }

    @NotNull
    public static final InquiryTemplateBuilder fromTemplateVersion(@NotNull String str) {
        return Companion.fromTemplateVersion(str);
    }

    @NotNull
    @c
    public static final InquiryResponse onActivityResult(Intent intent) {
        return Companion.onActivityResult(intent);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Intent toInquiryActivityIntent(Context context) {
        Intent intent = new Intent();
        intent.setClassName(context, "com.withpersona.sdk2.inquiry.internal.InquiryActivity");
        Bundle bundle = new Bundle();
        addArgumentsToBundle$inquiry_dynamic_feature_release(bundle);
        intent.replaceExtras(bundle);
        return intent;
    }

    public final void addArgumentsToBundle$inquiry_dynamic_feature_release(@NotNull Bundle bundle) {
        Intrinsics.checkNotNullParameter(bundle, "bundle");
        String str = this.templateId;
        if (str != null) {
            bundle.putString("TEMPLATE_ID_KEY", str);
        }
        String str2 = this.templateVersion;
        if (str2 != null) {
            bundle.putString("TEMPLATE_VERSION_KEY", str2);
        }
        String str3 = this.inquiryId;
        if (str3 != null) {
            bundle.putString("INQUIRY_ID_KEY", str3);
        }
        String str4 = this.oneTimeLinkCode;
        if (str4 != null) {
            bundle.putString("ONE_TIME_LINK_CODE", str4);
        }
        String str5 = this.sessionToken;
        if (str5 != null) {
            bundle.putString("SESSION_TOKEN_KEY", str5);
        }
        String str6 = this.referenceId;
        if (str6 != null) {
            bundle.putString("REFERENCE_ID_KEY", str6);
        }
        String str7 = this.accountId;
        if (str7 != null) {
            bundle.putString("ACCOUNT_ID_KEY", str7);
        }
        Fields fields = this.fields;
        if (fields != null) {
            bundle.putParcelable("FIELDS_MAP_KEY", new s(fields.getFields$inquiry_dynamic_feature_release()));
        }
        Integer num = this.theme;
        if (num != null) {
            bundle.putInt("THEME_KEY", num.intValue());
        }
        StaticInquiryTemplate staticInquiryTemplate = this.staticInquiryTemplate;
        if (staticInquiryTemplate != null) {
            bundle.putParcelable("STATIC_INQUIRY_TEMPLATE_KEY", staticInquiryTemplate);
        }
        Environment environment = this.environment;
        if (environment != null) {
            bundle.putString("ENVIRONMENT_KEY", environment.name());
        }
        String str8 = this.environmentId;
        if (str8 != null) {
            bundle.putString("ENVIRONMENT_ID_KEY", str8);
        }
        Boolean bool = this.enableErrorLogging;
        if (bool != null) {
            bundle.putBoolean("ENABLE_ERROR_LOGGING", bool.booleanValue());
        }
        Boolean bool2 = this.returnCollectedData;
        if (bool2 != null) {
            bundle.putBoolean("RETURN_COLLECTED_DATA", bool2.booleanValue());
        }
        FallbackMode fallbackMode = this.fallbackMode;
        if (fallbackMode != null) {
            bundle.putString("FALLBACK_MODE", fallbackMode.name());
        }
        Boolean bool3 = this.useServerStyles;
        if (bool3 != null) {
            bundle.putBoolean("USE_SERVER_STYLES", bool3.booleanValue());
        }
        String str9 = this.themeSetId;
        if (str9 != null) {
            bundle.putString("THEME_SET_ID_KEY", str9);
        }
        String str10 = this.locale;
        if (str10 != null) {
            bundle.putString("LOCALE", str10);
        }
        Boolean bool4 = this.consumeExceptions;
        if (bool4 != null) {
            bundle.putBoolean("CONSUME_EXCEPTIONS", bool4.booleanValue());
        }
    }

    @ExperimentalInlineApi
    @NotNull
    public final InlineInquiryBuilder buildInlineInquiry() {
        return new InlineInquiryBuilder(this);
    }

    @c
    public final void start(@NotNull Activity activity, int i10) {
        Intrinsics.checkNotNullParameter(activity, "activity");
        activity.startActivityForResult(toInquiryActivityIntent(activity), i10);
    }

    @NotNull
    @c
    public static final InquiryResponse onActivityResult(Intent intent, Context context) {
        return Companion.onActivityResult(intent, context);
    }
}
