package com.withpersona.sdk2.inquiry;

import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
import qr.c;
@Metadata(d1 = {"\u0000N\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\u0018\u00002\u00020\u0001B-\b\u0000\u0012\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0006¢\u0006\u0004\b\u0007\u0010\bJ\u000e\u0010\u001d\u001a\u00020\u00002\u0006\u0010\u0002\u001a\u00020\u0003J\u0010\u0010\n\u001a\u00020\u00002\b\u0010\n\u001a\u0004\u0018\u00010\u0003J\u0010\u0010\t\u001a\u00020\u00002\b\u0010\t\u001a\u0004\u0018\u00010\u0003J\u0010\u0010\u000b\u001a\u00020\u00002\b\u0010\u000b\u001a\u0004\u0018\u00010\fJ\u000e\u0010\u0011\u001a\u00020\u00002\u0006\u0010\u0011\u001a\u00020\u0012J\u000e\u0010\u0013\u001a\u00020\u00002\u0006\u0010\u0013\u001a\u00020\u0003J\u0012\u0010\r\u001a\u00020\u00002\b\b\u0001\u0010\r\u001a\u00020\u000eH\u0007J\u000e\u0010\r\u001a\u00020\u00002\u0006\u0010\u001e\u001a\u00020\u001fJ\u0010\u0010\u0010\u001a\u00020\u00002\u0006\u0010\u0010\u001a\u00020\u0003H\u0007J\u000e\u0010\u0014\u001a\u00020\u00002\u0006\u0010\u0014\u001a\u00020\u0015J\u000e\u0010\u0017\u001a\u00020\u00002\u0006\u0010\u0017\u001a\u00020\u0015J\u0010\u0010\u0018\u001a\u00020\u00002\u0006\u0010\u0018\u001a\u00020\u0019H\u0007J\u0012\u0010 \u001a\u00020\u00002\b\u0010 \u001a\u0004\u0018\u00010\u0003H\u0007J\u0010\u0010\u001b\u001a\u00020\u00002\b\u0010\u001b\u001a\u0004\u0018\u00010\u0003J\u000e\u0010\u001c\u001a\u00020\u00002\u0006\u0010\u001c\u001a\u00020\u0015J\u0006\u0010!\u001a\u00020\"R\u0010\u0010\u0002\u001a\u0004\u0018\u00010\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\u0004\u001a\u0004\u0018\u00010\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\u0005\u001a\u0004\u0018\u00010\u0006X\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\t\u001a\u0004\u0018\u00010\u0003X\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\n\u001a\u0004\u0018\u00010\u0003X\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\u000b\u001a\u0004\u0018\u00010\fX\u0082\u000e¢\u0006\u0002\n\u0000R\u0012\u0010\r\u001a\u0004\u0018\u00010\u000eX\u0082\u000e¢\u0006\u0004\n\u0002\u0010\u000fR\u0010\u0010\u0010\u001a\u0004\u0018\u00010\u0003X\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\u0011\u001a\u0004\u0018\u00010\u0012X\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\u0013\u001a\u0004\u0018\u00010\u0003X\u0082\u000e¢\u0006\u0002\n\u0000R\u0012\u0010\u0014\u001a\u0004\u0018\u00010\u0015X\u0082\u000e¢\u0006\u0004\n\u0002\u0010\u0016R\u0012\u0010\u0017\u001a\u0004\u0018\u00010\u0015X\u0082\u000e¢\u0006\u0004\n\u0002\u0010\u0016R\u000e\u0010\u0018\u001a\u00020\u0019X\u0082\u000e¢\u0006\u0002\n\u0000R\u0012\u0010\u001a\u001a\u0004\u0018\u00010\u0015X\u0082\u000e¢\u0006\u0004\n\u0002\u0010\u0016R\u0010\u0010\u001b\u001a\u0004\u0018\u00010\u0003X\u0082\u000e¢\u0006\u0002\n\u0000R\u0012\u0010\u001c\u001a\u0004\u0018\u00010\u0015X\u0082\u000e¢\u0006\u0004\n\u0002\u0010\u0016¨\u0006#"}, d2 = {"Lcom/withpersona/sdk2/inquiry/InquiryTemplateBuilder;", "", "templateId", "", "templateVersion", "staticInquiryTemplate", "Lcom/withpersona/sdk2/inquiry/StaticInquiryTemplate;", "<init>", "(Ljava/lang/String;Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/StaticInquiryTemplate;)V", "accountId", "referenceId", "fields", "Lcom/withpersona/sdk2/inquiry/Fields;", "theme", "", "Ljava/lang/Integer;", "themeSetId", "environment", "Lcom/withpersona/sdk2/inquiry/Environment;", "environmentId", "enableErrorLogging", "", "Ljava/lang/Boolean;", "returnCollectedData", "fallbackMode", "Lcom/withpersona/sdk2/inquiry/FallbackMode;", "useServerStyles", "locale", "consumeExceptions", "fromTemplateId", "themeSource", "Lcom/withpersona/sdk2/inquiry/ThemeSource;", "routingCountry", "build", "Lcom/withpersona/sdk2/inquiry/Inquiry;", "inquiry-dynamic-feature_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nInquiryTemplateBuilder.kt\nKotlin\n*S Kotlin\n*F\n+ 1 InquiryTemplateBuilder.kt\ncom/withpersona/sdk2/inquiry/InquiryTemplateBuilder\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,206:1\n1#2:207\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class InquiryTemplateBuilder {
    private String accountId;
    private Boolean consumeExceptions;
    private Boolean enableErrorLogging;
    private Environment environment;
    private String environmentId;
    @NotNull
    private FallbackMode fallbackMode;
    private Fields fields;
    private String locale;
    private String referenceId;
    private Boolean returnCollectedData;
    private final StaticInquiryTemplate staticInquiryTemplate;
    private final String templateId;
    private final String templateVersion;
    private Integer theme;
    private String themeSetId;
    private Boolean useServerStyles;

    public InquiryTemplateBuilder() {
        this(null, null, null, 7, null);
    }

    @NotNull
    public final InquiryTemplateBuilder accountId(String str) {
        this.referenceId = null;
        this.accountId = str;
        return this;
    }

    @NotNull
    public final Inquiry build() {
        return new Inquiry(this.templateId, this.templateVersion, null, null, null, this.referenceId, this.accountId, this.fields, this.theme, this.environment, this.environmentId, this.enableErrorLogging, this.returnCollectedData, this.fallbackMode, this.useServerStyles, this.staticInquiryTemplate, this.themeSetId, this.locale, this.consumeExceptions);
    }

    @NotNull
    public final InquiryTemplateBuilder consumeExceptions(boolean z10) {
        this.consumeExceptions = Boolean.valueOf(z10);
        return this;
    }

    @NotNull
    public final InquiryTemplateBuilder enableErrorLogging(boolean z10) {
        this.enableErrorLogging = Boolean.valueOf(z10);
        return this;
    }

    @NotNull
    public final InquiryTemplateBuilder environment(@NotNull Environment environment) {
        Intrinsics.checkNotNullParameter(environment, "environment");
        this.environment = environment;
        return this;
    }

    @NotNull
    public final InquiryTemplateBuilder environmentId(@NotNull String environmentId) {
        Intrinsics.checkNotNullParameter(environmentId, "environmentId");
        this.environmentId = environmentId;
        return this;
    }

    @ExperimentalFallbackMode
    @NotNull
    public final InquiryTemplateBuilder fallbackMode(@NotNull FallbackMode fallbackMode) {
        Intrinsics.checkNotNullParameter(fallbackMode, "fallbackMode");
        this.fallbackMode = fallbackMode;
        return this;
    }

    @NotNull
    public final InquiryTemplateBuilder fields(Fields fields) {
        this.fields = fields;
        return this;
    }

    @NotNull
    public final InquiryTemplateBuilder fromTemplateId(@NotNull String templateId) {
        Intrinsics.checkNotNullParameter(templateId, "templateId");
        return new InquiryTemplateBuilder(templateId, null, null, 6, null);
    }

    @NotNull
    public final InquiryTemplateBuilder locale(String str) {
        this.locale = str;
        return this;
    }

    @NotNull
    public final InquiryTemplateBuilder referenceId(String str) {
        this.accountId = null;
        this.referenceId = str;
        return this;
    }

    @NotNull
    public final InquiryTemplateBuilder returnCollectedData(boolean z10) {
        this.returnCollectedData = Boolean.valueOf(z10);
        return this;
    }

    @NotNull
    @c
    public final InquiryTemplateBuilder routingCountry(String str) {
        return this;
    }

    @NotNull
    @c
    public final InquiryTemplateBuilder theme(int i10) {
        this.theme = Integer.valueOf(i10);
        this.useServerStyles = Boolean.FALSE;
        return this;
    }

    @ExperimentalThemeSetId
    @NotNull
    public final InquiryTemplateBuilder themeSetId(@NotNull String themeSetId) {
        Intrinsics.checkNotNullParameter(themeSetId, "themeSetId");
        this.themeSetId = themeSetId;
        return this;
    }

    public InquiryTemplateBuilder(String str, String str2, StaticInquiryTemplate staticInquiryTemplate) {
        this.templateId = str;
        this.templateVersion = str2;
        this.staticInquiryTemplate = staticInquiryTemplate;
        this.fallbackMode = FallbackMode.NEVER;
    }

    @NotNull
    public final InquiryTemplateBuilder theme(@NotNull ThemeSource themeSource) {
        Intrinsics.checkNotNullParameter(themeSource, "themeSource");
        this.theme = themeSource.getTheme();
        this.useServerStyles = Boolean.valueOf(themeSource instanceof ServerThemeSource);
        return this;
    }

    public /* synthetic */ InquiryTemplateBuilder(String str, String str2, StaticInquiryTemplate staticInquiryTemplate, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : str, (i10 & 2) != 0 ? null : str2, (i10 & 4) != 0 ? null : staticInquiryTemplate);
    }
}
