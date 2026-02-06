package io.sentry.protocol;

import io.sentry.ILogger;
import io.sentry.e3;
import io.sentry.f3;
import io.sentry.m1;
import io.sentry.w1;
import java.util.HashMap;
import java.util.Map;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class DebugImage implements w1 {
    public static final String JVM = "jvm";
    public static final String PROGUARD = "proguard";
    private String arch;
    private String codeFile;
    private String codeId;
    private String debugFile;
    private String debugId;
    private String imageAddr;
    private Long imageSize;
    private String type;
    private Map<String, Object> unknown;
    private String uuid;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public DebugImage a(e3 e3Var, ILogger iLogger) {
            DebugImage debugImage = new DebugImage();
            e3Var.u();
            HashMap hashMap = null;
            while (e3Var.peek() == io.sentry.vendor.gson.stream.b.NAME) {
                String o02 = e3Var.o0();
                o02.getClass();
                char c10 = 65535;
                switch (o02.hashCode()) {
                    case -1840639000:
                        if (o02.equals("debug_file")) {
                            c10 = 0;
                            break;
                        }
                        break;
                    case -1443345323:
                        if (o02.equals("image_addr")) {
                            c10 = 1;
                            break;
                        }
                        break;
                    case -1442803611:
                        if (o02.equals("image_size")) {
                            c10 = 2;
                            break;
                        }
                        break;
                    case -1127437170:
                        if (o02.equals("code_file")) {
                            c10 = 3;
                            break;
                        }
                        break;
                    case 3002454:
                        if (o02.equals("arch")) {
                            c10 = 4;
                            break;
                        }
                        break;
                    case 3575610:
                        if (o02.equals("type")) {
                            c10 = 5;
                            break;
                        }
                        break;
                    case 3601339:
                        if (o02.equals("uuid")) {
                            c10 = 6;
                            break;
                        }
                        break;
                    case 547804807:
                        if (o02.equals("debug_id")) {
                            c10 = 7;
                            break;
                        }
                        break;
                    case 941842605:
                        if (o02.equals("code_id")) {
                            c10 = '\b';
                            break;
                        }
                        break;
                }
                switch (c10) {
                    case 0:
                        debugImage.debugFile = e3Var.q1();
                        break;
                    case 1:
                        debugImage.imageAddr = e3Var.q1();
                        break;
                    case 2:
                        debugImage.imageSize = e3Var.l1();
                        break;
                    case 3:
                        debugImage.codeFile = e3Var.q1();
                        break;
                    case 4:
                        debugImage.arch = e3Var.q1();
                        break;
                    case 5:
                        debugImage.type = e3Var.q1();
                        break;
                    case 6:
                        debugImage.uuid = e3Var.q1();
                        break;
                    case 7:
                        debugImage.debugId = e3Var.q1();
                        break;
                    case '\b':
                        debugImage.codeId = e3Var.q1();
                        break;
                    default:
                        if (hashMap == null) {
                            hashMap = new HashMap();
                        }
                        e3Var.u1(iLogger, hashMap, o02);
                        break;
                }
            }
            e3Var.D();
            debugImage.setUnknown(hashMap);
            return debugImage;
        }
    }

    public String getArch() {
        return this.arch;
    }

    public String getCodeFile() {
        return this.codeFile;
    }

    public String getCodeId() {
        return this.codeId;
    }

    public String getDebugFile() {
        return this.debugFile;
    }

    public String getDebugId() {
        return this.debugId;
    }

    public String getImageAddr() {
        return this.imageAddr;
    }

    public Long getImageSize() {
        return this.imageSize;
    }

    public String getType() {
        return this.type;
    }

    public Map<String, Object> getUnknown() {
        return this.unknown;
    }

    public String getUuid() {
        return this.uuid;
    }

    @Override // io.sentry.w1
    public void serialize(@NotNull f3 f3Var, @NotNull ILogger iLogger) {
        f3Var.u();
        if (this.uuid != null) {
            f3Var.e("uuid").f(this.uuid);
        }
        if (this.type != null) {
            f3Var.e("type").f(this.type);
        }
        if (this.debugId != null) {
            f3Var.e("debug_id").f(this.debugId);
        }
        if (this.debugFile != null) {
            f3Var.e("debug_file").f(this.debugFile);
        }
        if (this.codeId != null) {
            f3Var.e("code_id").f(this.codeId);
        }
        if (this.codeFile != null) {
            f3Var.e("code_file").f(this.codeFile);
        }
        if (this.imageAddr != null) {
            f3Var.e("image_addr").f(this.imageAddr);
        }
        if (this.imageSize != null) {
            f3Var.e("image_size").i(this.imageSize);
        }
        if (this.arch != null) {
            f3Var.e("arch").f(this.arch);
        }
        Map<String, Object> map = this.unknown;
        if (map != null) {
            for (String str : map.keySet()) {
                f3Var.e(str).j(iLogger, this.unknown.get(str));
            }
        }
        f3Var.D();
    }

    public void setArch(String str) {
        this.arch = str;
    }

    public void setCodeFile(String str) {
        this.codeFile = str;
    }

    public void setCodeId(String str) {
        this.codeId = str;
    }

    public void setDebugFile(String str) {
        this.debugFile = str;
    }

    public void setDebugId(String str) {
        this.debugId = str;
    }

    public void setImageAddr(String str) {
        this.imageAddr = str;
    }

    public void setImageSize(Long l10) {
        this.imageSize = l10;
    }

    public void setType(String str) {
        this.type = str;
    }

    public void setUnknown(Map<String, Object> map) {
        this.unknown = map;
    }

    public void setUuid(String str) {
        this.uuid = str;
    }

    public void setImageSize(long j10) {
        this.imageSize = Long.valueOf(j10);
    }
}
